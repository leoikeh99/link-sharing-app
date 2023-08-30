import { NextRequest } from "next/server";
import { AddLinkSchema, Links } from "./schemas";
import { getServerSession } from "next-auth/next";
import validateSchema from "../../middleware/validateSchema";
import { options } from "../../auth/[...nextauth]/authOptions";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { containsDuplicates } from "../../utils";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { success, errors, data } = validateSchema(body, AddLinkSchema);

  if (!success) {
    return new Response(JSON.stringify(errors), {
      status: 400,
    });
  }

  const session = await getServerSession(options);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("link-share");

    const links: Links = data;
    const userId = session.user?.id;

    //check if docs for updates are valid docs
    for (const value of links.filter((link) => link.updated)) {
      const checkDoc = await db
        .collection("links")
        .findOne({ _id: new ObjectId(value.id), userId: new ObjectId(userId) });

      if (!checkDoc) {
        return new Response(
          JSON.stringify({
            message: `Document with _id:${value.id} is invalid`,
          }),
          {
            status: 400,
          }
        );
      }
    }

    //make sure the order does no surpass the total number of links
    const numberOfCurrentLinks = await db
      .collection("links")
      .countDocuments({ userId: new ObjectId(userId) });
    const numberOfNewLinks = links.filter((link) => link.new).length;
    const totalNumberOfLinks = numberOfCurrentLinks + numberOfNewLinks;

    if (links.some((link) => link.order > links.length)) {
      return new Response(
        JSON.stringify({
          message: `Order number cannot be greater than the total number of links(${totalNumberOfLinks})`,
        }),
        {
          status: 400,
        }
      );
    }

    //make sure order numbers do not repeat
    if (containsDuplicates(links.map((link) => link.order))) {
      return new Response(
        JSON.stringify({ message: "Order numbers must not repeat" }),
        { status: 400 }
      );
    }

    //links to update
    if (links.some((link) => link.updated)) {
      const updateLinks = links.filter((link) => link.updated);

      //bulk write updates
      await db.collection("links").bulkWrite(
        updateLinks.map((values) => {
          return {
            updateOne: {
              filter: { _id: new ObjectId(values.id) },
              update: {
                $set: {
                  platform: values.platform,
                  url: values.url,
                  order: values.order,
                },
              },
            },
          };
        })
      );
    }

    //new links to add
    if (links.some((link) => link.new)) {
      const newLinks = links
        .filter((link) => link.new)
        .map((values) => {
          return {
            platform: values.platform,
            url: values.url,
            order: values.order,
            userId: new ObjectId(userId),
          };
        });

      await db.collection("links").insertMany(newLinks);
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 400,
    });
  }
}

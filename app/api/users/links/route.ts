import { NextRequest } from "next/server";
import { AddLinkSchema, SaveLinks } from "./schemas";
import { getServerSession } from "next-auth/next";
import validateSchema from "../../middleware/validateSchema";
import { options } from "../../auth/[...nextauth]/authOptions";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { containsDuplicates } from "../../utils";

export async function POST(req: NextRequest) {
  const body = await req.json();

  let { success, errors, data } = validateSchema(body, AddLinkSchema);

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

    let _data: SaveLinks = data;
    const links = _data.links;
    const removedLinks = _data.removedLinks;
    const userId = session.user?.id;

    if (removedLinks) {
      for (const id of removedLinks) {
        if (links.some((values) => values._id === id)) {
          return new Response(
            JSON.stringify({
              message: "Updated or New links cannot be a removed link",
            }),
            {
              status: 400,
            }
          );
        }
      }
      //delete all removed links
      await db.collection("links").bulkWrite(
        removedLinks.map((id) => {
          return {
            deleteOne: {
              filter: { _id: new ObjectId(id) },
            },
          };
        })
      );
    }

    //check if docs for updates are valid docs
    for (const value of links.filter((link) => link.updated)) {
      const checkDoc = await db.collection("links").findOne({
        _id: new ObjectId(value._id),
        userId: new ObjectId(userId),
      });

      if (!checkDoc) {
        return new Response(
          JSON.stringify({
            message: `Document with _id:${value._id} is invalid`,
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

    if (links.some((link) => link.order > totalNumberOfLinks)) {
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
              filter: { _id: new ObjectId(values._id) },
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

    const allLinks = await db
      .collection("links")
      .find({ userId: new ObjectId(userId) })
      .toArray();

    return new Response(
      JSON.stringify({
        message: "Links saved successfully",
        links: JSON.parse(JSON.stringify(allLinks)),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong, try again" }),
      {
        status: 400,
      }
    );
  }
}

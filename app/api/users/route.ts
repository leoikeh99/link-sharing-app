import { NextRequest } from "next/server";
import validateSchema from "../middleware/validateSchema";
import { UpdateUserSchema, UserUpdate } from "./schemas";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/authOptions";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const session = await getServerSession(options);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  let { success, errors, data } = validateSchema(body, UpdateUserSchema);

  if (!success) {
    return new Response(JSON.stringify(errors), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("link-share");

    const userUpdate: UserUpdate = data;

    const user = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(session.user?.id) }, { $set: userUpdate });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "Error updating profile" }),
        {
          status: 400,
        }
      );
    }

    return new Response(JSON.stringify({ message: "Profile saved" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 400,
    });
  }
}

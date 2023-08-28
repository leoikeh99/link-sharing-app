import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";
import { RegisterUserSchema } from "./schemas";
import bcrypt from "bcryptjs";
import validateSchema from "../../middleware/validateSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { success, errors, data } = validateSchema(body, RegisterUserSchema);

  if (!success) {
    return new Response(JSON.stringify(errors), {
      status: 400,
    });
  }

  const user = data;

  try {
    const client = await clientPromise;
    const db = client.db("link-share");

    const checkEmail = await db
      .collection("users")
      .findOne({ email: user.email.toLowerCase() });
    if (checkEmail) {
      return new Response(JSON.stringify({ message: "Email already in use" }), {
        status: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //save user in db
    await db.collection("users").insertOne(user);
    delete user.password;

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 400,
    });
  }
}

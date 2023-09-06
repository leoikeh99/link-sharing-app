import { bytesToMb, isImageTypeAllowed } from "@/app/utils";
import cloudinary from "@/lib/cloudinary";
import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/authOptions";
import { ObjectId } from "mongodb";

export async function PUT(req: NextRequest) {
  const formData = await req.formData();
  const file: File | null = formData.get("avatar") as unknown as File;

  const session = await getServerSession(options);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  if (!file) {
    return new Response(JSON.stringify({ message: "File invalid" }), {
      status: 400,
    });
  }

  if (!isImageTypeAllowed(file.type)) {
    return new Response(
      JSON.stringify({ message: "Only JPG and PNG images allowed" }),
      {
        status: 400,
      }
    );
  }

  if (bytesToMb(file.size) > 2) {
    return new Response(JSON.stringify({ message: "Max image size: 2MB" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("link-share");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes).toString("base64");
    const imageReadStream = `data:${file.type};base64,` + buffer;

    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(session.user?.id) });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Error updloading image" }),
        {
          status: 400,
        }
      );
    }

    if (user.cloudinaryId) {
      await cloudinary.uploader.destroy(user.cloudinaryId);
    }

    const uploadResult = await cloudinary.uploader.upload(imageReadStream, {
      folder: "link share",
    });
    const { url, public_id } = uploadResult;

    const updateAvatar = await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(session.user?.id) },
        { $set: { image: url, cloudinaryId: public_id } }
      );

    if (!updateAvatar) {
      return new Response(
        JSON.stringify({ message: "Error updloading image" }),
        {
          status: 400,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Image uploaded successfully", imageUrl: url }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 400,
    });
  }
}

import { imageTypes } from "@/app/constants";
import { bytesToMb, isImageTypeAllowed } from "@/app/utils";
import cloudinary from "@/lib/cloudinary";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const formData = await req.formData();
  const file: File | null = formData.get("avatar") as unknown as File;

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
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes).toString("base64");
    const withPrefix = `data:${file.type};base64,` + buffer;

    const uploadResult = await cloudinary.uploader.upload(withPrefix, {
      folder: "link share",
    });
    console.log(uploadResult);

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 400,
    });
  }
}

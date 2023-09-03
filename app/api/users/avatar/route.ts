import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file: File | null = formData.get("Avatar") as unknown as File;

  if (!file) {
    return new Response(JSON.stringify({ success: "File invalid" }), {
      status: 400,
    });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  console.log(buffer);

  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
}

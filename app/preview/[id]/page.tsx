import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";
import getUserData from "@/lib/getUserData";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function PreviewLinks({
  params,
}: {
  params: { id: string };
}) {
  const userId = params.id;

  const client = await clientPromise;
  const db = client.db("link-share");

  if (!userId || !userId.match(/^[0-9a-fA-F]{24}$/))
    throw new Error("Page not found");

  let user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) });
  if (!user) throw new Error("Page not found");

  delete user?.password;
  const userInfo: UserInfo = JSON.parse(JSON.stringify(user));

  const userLinks = await db
    .collection("links")
    .find({ userId: new ObjectId(userId) })
    .toArray();
  if (!userLinks) throw new Error("Something went wrong try again");

  const links: Array<UserLink> = JSON.parse(JSON.stringify(userLinks));

  let data = {
    userInfo,
    links,
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <MainContent>
        <ContentContainer>
          <UserProfile {...data} uploadImage={null} />
        </ContentContainer>
      </MainContent>
    </div>
  );
}

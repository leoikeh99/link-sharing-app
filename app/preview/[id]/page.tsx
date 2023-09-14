import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";
import getUserData from "@/lib/getUserData";
import { Metadata, ResolvingMetadata } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const client = await clientPromise;
  const db = client.db("link-share");

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return { title: "Page not found", description: "Page not found" };
  }

  const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
  if (!user) {
    return { title: "Page not found", description: "Page not found" };
  }

  return {
    title:
      !user.firstName || !user.lastName
        ? "User Links"
        : `${user.firstName || user.LastName}'s Links`,
  };
}

export default async function PreviewLinks({
  params,
}: {
  params: { id: string };
}) {
  const userId = params.id;

  let userData = await getUserData(userId);
  if (!userData.success || !userData.userInfo || !userData.links) {
    if (userData.type === "regular")
      throw new Error("Something went wrong try again");
    if (userData.type === "notFound") throw new Error("Page not Found");
    return;
  }

  let data = {
    userInfo: userData.userInfo,
    links: userData.links,
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

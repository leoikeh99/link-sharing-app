import { options } from "@/app/api/auth/[...nextauth]/authOptions";
import MobilePreview from "@/app/components/MobilePreview";
import ProfileDetails from "@/app/components/ProfileDetails";
import { UserProvider } from "@/app/context/UserContext";
import { HomeGrid } from "@/app/styles/LayoutStyles";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Profile() {
  const session = await getServerSession(options);
  const userId = session?.user.id;

  const client = await clientPromise;
  const db = client.db("link-share");

  if (!userId || !userId.match(/^[0-9a-fA-F]{24}$/))
    throw new Error("Something went wrong try again");

  let user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) });
  if (!user) throw new Error("Something went wrong try again");

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
    <UserProvider data={data}>
      <HomeGrid>
        <MobilePreview />
        <ProfileDetails />
      </HomeGrid>
    </UserProvider>
  );
}

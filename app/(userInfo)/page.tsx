import React from "react";
import CustomizeLinks from "../components/customizeLinks";
import { HomeGrid } from "../styles/LayoutStyles";
import MobilePreview from "../components/MobilePreview";
import { UserProvider } from "../context/UserContext";
import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/authOptions";
import { ObjectId } from "mongodb";

export default async function Home() {
  const session = await getServerSession(options);
  const client = await clientPromise;
  const db = client.db("link-share");

  let user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(session?.user?.id) });
  delete user?.password;
  const userInfo: UserInfo = JSON.parse(JSON.stringify(user));

  const userLinks = await db
    .collection("links")
    .find({ userId: new ObjectId(session?.user?.id) })
    .toArray();
  const links: Array<UserLink> = JSON.parse(JSON.stringify(userLinks));

  const data = {
    userInfo,
    links,
  };

  return (
    <UserProvider data={data}>
      {/* <p>{advice.slip.advice}</p> */}
      <HomeGrid>
        <MobilePreview />
        <CustomizeLinks />
      </HomeGrid>
    </UserProvider>
  );
}

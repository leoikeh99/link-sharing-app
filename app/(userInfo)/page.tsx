import React, { Suspense } from "react";
import CustomizeLinks from "../components/customizeLinks";
import { HomeGrid } from "../styles/LayoutStyles";
import MobilePreview from "../components/MobilePreview";
import { UserProvider } from "../context/UserContext";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/authOptions";
import getUserData from "@/lib/getUserData";

export default async function Home() {
  const session = await getServerSession(options);

  let userData = await getUserData(session?.user?.id);
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
    <UserProvider data={data}>
      <HomeGrid>
        <MobilePreview />
        <CustomizeLinks />
      </HomeGrid>
    </UserProvider>
  );
}

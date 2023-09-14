import { options } from "@/app/api/auth/[...nextauth]/authOptions";
import MobilePreview from "@/app/components/MobilePreview";
import ProfileDetails from "@/app/components/ProfileDetails";
import { UserProvider } from "@/app/context/UserContext";
import { HomeGrid } from "@/app/styles/LayoutStyles";
import getUserData from "@/lib/getUserData";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata: Metadata = {
  title: "Dev Links | Update Profile",
  description: "Update your Dev Links profile",
};

export default async function Profile() {
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
        <ProfileDetails />
      </HomeGrid>
    </UserProvider>
  );
}

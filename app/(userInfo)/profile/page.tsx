import { options } from "@/app/api/auth/[...nextauth]/authOptions";
import MobilePreview from "@/app/components/MobilePreview";
import ProfileDetails from "@/app/components/ProfileDetails";
import { UserProvider } from "@/app/context/UserContext";
import { HomeGrid } from "@/app/styles/LayoutStyles";
import getUserData from "@/lib/getUserData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Profile() {
  const session = await getServerSession(options);

  let data = await getUserData(session?.user?.id);
  if (!data) throw new Error("Something went wrong try again");

  return (
    <UserProvider data={data}>
      <HomeGrid>
        <MobilePreview />
        <ProfileDetails />
      </HomeGrid>
    </UserProvider>
  );
}

import React from "react";
import CustomizeLinks from "../components/customizeLinks";
import { HomeGrid } from "../styles/LayoutStyles";
import MobilePreview from "../components/MobilePreview";
import { UserProvider } from "../context/UserContext";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/authOptions";
import getUserData from "@/lib/getUserData";

export default async function Home() {
  const session = await getServerSession(options);

  let data = await getUserData(session?.user?.id);
  if (!data) throw new Error("Something went wrong try again");

  return (
    <UserProvider data={data}>
      <HomeGrid>
        <MobilePreview />
        <CustomizeLinks />
      </HomeGrid>
    </UserProvider>
  );
}

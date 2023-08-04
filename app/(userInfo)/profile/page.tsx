import MobilePreview from "@/app/components/MobilePreview";
import ProfileDetails from "@/app/components/ProfileDetails";
import { HomeGrid } from "@/app/styles/LayoutStyles";
import React from "react";

export default function Profile() {
  return (
    <HomeGrid>
      <MobilePreview />
      <ProfileDetails />
    </HomeGrid>
  );
}

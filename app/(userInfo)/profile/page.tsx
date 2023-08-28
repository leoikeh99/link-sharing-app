import MobilePreview from "@/app/components/MobilePreview";
import ProfileDetails from "@/app/components/ProfileDetails";
import { UserProvider } from "@/app/context/UserContext";
import { HomeGrid } from "@/app/styles/LayoutStyles";
import React from "react";

const data = {
  userInfo: {
    firstName: "Wazza",
    lastName: "Ikeh",
    displayEmail: "leoikeh99@gmail.com",
  },
  links: [],
};
console.log(data);

export default async function Profile() {
  return (
    <UserProvider data={data}>
      <HomeGrid>
        <MobilePreview />
        <ProfileDetails />
      </HomeGrid>
    </UserProvider>
  );
}

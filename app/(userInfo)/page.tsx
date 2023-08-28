import React from "react";
import CustomizeLinks from "../components/customizeLinks";
import { HomeGrid } from "../styles/LayoutStyles";
import MobilePreview from "../components/MobilePreview";
import { UserProvider } from "../context/UserContext";

const data = {
  userInfo: {
    firstName: "Leonard",
    lastName: "Ikeh",
    displayEmail: "leoanthoikeh@gmail.com",
  },
  links: [],
};

export default async function Home() {
  // let advice: any;
  // await fetch("https://api.adviceslip.com/advice").then(async (res) => {
  //   advice = await res.json();
  // });
  // console.log(advice);

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

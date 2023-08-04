import React from "react";
import CustomizeLinks from "../components/customizeLinks";
import { HomeGrid } from "../styles/LayoutStyles";
import MobilePreview from "../components/MobilePreview";

export default function Home() {
  return (
    <HomeGrid>
      <MobilePreview />
      <CustomizeLinks />
    </HomeGrid>
  );
}

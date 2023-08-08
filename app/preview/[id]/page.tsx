import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";

export default function PreviewLinks() {
  return (
    <div>
      <MainContent>
        <ContentContainer>
          <UserProfile bigText={true} />
        </ContentContainer>
      </MainContent>
    </div>
  );
}

import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function PreviewLinks() {
  const session = await getServerSession(options);
  console.log(session);

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

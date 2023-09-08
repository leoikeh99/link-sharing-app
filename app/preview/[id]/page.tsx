import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";
import getUserData from "@/lib/getUserData";

export default async function PreviewLinks({
  params,
}: {
  params: { id: string };
}) {
  let userData = await getUserData(params.id);
  if (!userData.success || !userData.userInfo || !userData.links) {
    if (userData.type === "regular")
      throw new Error("Something went wrong try again");
    if (userData.type === "notFound") throw new Error("Page not found");
    return;
  }

  let data = {
    userInfo: userData.userInfo,
    links: userData.links,
  };

  return (
    <div>
      <MainContent>
        <ContentContainer>
          <UserProfile {...data} uploadImage={null} />
        </ContentContainer>
      </MainContent>
    </div>
  );
}

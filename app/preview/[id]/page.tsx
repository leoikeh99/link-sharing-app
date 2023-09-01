import React from "react";
import { ContentContainer, MainContent } from "../styles";
import UserProfile from "@/app/components/MobilePreview/UserProfile";
import getUserData from "@/lib/getUserData";

export default async function PreviewLinks({
  params,
}: {
  params: { id: string };
}) {
  let data = await getUserData(params.id);
  if (!data) throw new Error("Something went wrong try again");

  return (
    <div>
      <MainContent>
        <ContentContainer>
          <UserProfile {...data} />
        </ContentContainer>
      </MainContent>
    </div>
  );
}

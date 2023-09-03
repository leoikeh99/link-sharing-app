"use client";
import {
  FlexGroup,
  HomeFormsTopWrapper,
  HomeGrid,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { MainHeading, Text } from "@/app/styles/TypographyStyles";
import { Root, Submit } from "@radix-ui/react-form";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import ImageUpload from "./ImageUpload";
import ProfileInfo from "./ProfileInfo";
import { Button } from "@/app/styles/FormStyles";
import MobilePreview from "../MobilePreview";
import UserContext from "@/app/context/UserContext";
import Loading from "react-loading";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const ProfileDetails = (props: Props) => {
  const { loading, updateProfile } = useContext(UserContext);
  const [file, setFile] = useState<Blob | undefined | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFile(e.target.files?.[0]);

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile();
  };
  return (
    <Form onSubmit={submitForm}>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Profile Details</MainHeading>
        <Text $mb="2.5">
          Add your details to create a personal touch to your profile.
        </Text>
        <ImageUpload file={file} onChange={onFileChange} />
        <ProfileInfo />
      </HomeFormsTopWrapper>
      <SaveButtonContainer>
        <Submit asChild>
          <Button disabled={loading === "PROFILE"}>
            <FlexGroup $gap="0.5">
              {loading && (
                <Loading
                  type="spin"
                  height={23}
                  width={23}
                  color="var(--clr-neutral-100)"
                />
              )}
              <span>Save</span>
            </FlexGroup>
          </Button>
        </Submit>
      </SaveButtonContainer>
    </Form>
  );
};

export default ProfileDetails;

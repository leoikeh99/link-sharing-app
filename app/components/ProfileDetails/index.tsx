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
import { imageTypes } from "@/app/constants";
import { bytesToMb, isImageTypeAllowed } from "@/app/utils";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const ProfileDetails = (props: Props) => {
  const { loading, updateProfile, updateUploadImage } = useContext(UserContext);
  const [file, setFile] = useState<Blob | undefined | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isImageTypeAllowed(file.type)) {
      console.log(`Only JPG and PNG images allowed`);
      return;
    }
    if (bytesToMb(file.size) > 2) {
      console.log(`Max image size: 2MB`);
      return;
    }
    var _URL = window.URL || window.webkitURL;
    let img = new Image();
    var objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
      if (img.height < 1024 && img.width < 1024) {
        setFile(file);
      } else {
        console.log(`Dimensions cannot exceed 1024 X 1024`);
        updateUploadImage(null);
        setFile(null);
      }
      _URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (!reader.result) {
        console.log("Error adding image.");
        return;
      }
      updateUploadImage(reader.result.toString());
    };
  };

  const clearFile = () => setFile(null);

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(file, clearFile);
  };
  return (
    <Form onSubmit={submitForm}>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Profile Details</MainHeading>
        <Text $mb="2.5">
          Add your details to create a personal touch to your profile.
        </Text>
        <ImageUpload onChange={onFileChange} />
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

"use client";
import {
  FlexGroup,
  HomeFormsTopWrapper,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { MainHeading, Text } from "@/app/styles/TypographyStyles";
import { Root, Submit } from "@radix-ui/react-form";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import ImageUpload from "./ImageUpload";
import ProfileInfo from "./ProfileInfo";
import { Button, LogoutBtn } from "@/app/styles/FormStyles";
import UserContext from "@/app/context/UserContext";
import Loading from "react-loading";
import { bytesToMb, isImageTypeAllowed } from "@/app/utils";
import AlertContext from "@/app/context/AlertContext";
import { signOut } from "next-auth/react";

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const ProfileDetails = () => {
  const { loading, updateProfile, updateUploadImage } = useContext(UserContext);
  const [file, setFile] = useState<Blob | undefined | null>(null);
  const { createAlert } = useContext(AlertContext);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isImageTypeAllowed(file.type)) {
      e.target.value = "";
      createAlert("danger", "Only JPG and PNG images allowed");
      return;
    }
    if (bytesToMb(file.size) > 2) {
      e.target.value = "";
      createAlert("danger", "Max image size: 2MB");
      return;
    }
    var _URL = window.URL || window.webkitURL;
    let img = new Image();
    var objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
      if (img.height < 1024 && img.width < 1024) {
        setFile(file);
      } else {
        createAlert("danger", "Dimensions cannot exceed 1024 X 1024");
        updateUploadImage(null);
        setFile(null);
      }
      e.target.value = "";
      _URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (!reader.result) {
        createAlert("danger", "Error adding image.");
        return;
      }
      updateUploadImage(reader.result.toString());
    };
    e.target.value = "";
  };

  const clearFile = () => setFile(null);

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(file, clearFile);
  };
  return (
    <Form onSubmit={submitForm}>
      <HomeFormsTopWrapper>
        <LogoutBtn
          className="logout-btn"
          type="button"
          onClick={() => signOut()}>
          Logout
        </LogoutBtn>
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

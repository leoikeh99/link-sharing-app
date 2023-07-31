"use client";
import {
  HomeFormsTopWrapper,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { MainHeading, Text } from "@/app/styles/TypographyStyles";
import { Root } from "@radix-ui/react-form";
import React from "react";
import { styled } from "styled-components";
import ImageUpload from "./ImageUpload";
import ProfileInfo from "./ProfileInfo";
import { Button } from "@/app/styles/FormStyles";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.5rem;
`;

const ProfileDetails = (props: Props) => {
  return (
    <Form>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Profile Details</MainHeading>
        <Text $mb="2.5">
          Add your details to create a personal touch to your profile.
        </Text>
        <ImageUpload />
        <ProfileInfo />
      </HomeFormsTopWrapper>
      <SaveButtonContainer>
        <Button $wFull>Save</Button>
      </SaveButtonContainer>
    </Form>
  );
};

export default ProfileDetails;

"use client";
import React from "react";
import { MainHeading, Text } from "../../styles/TypographyStyles";
import { Button } from "../../styles/FormStyles";
import Links from "./Links";
import {
  HomeFormsTopWrapper,
  HomeGrid,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { Root } from "@radix-ui/react-form";
import { styled } from "styled-components";
import MobilePreview from "../MobilePreview";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const CustomizeLinks = (props: Props) => {
  return (
    <Form>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Customize your links</MainHeading>
        <Text $mb="2.5">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Text>
        <Button $variant="outlined" $wFull type="button">
          + Add new link
        </Button>
        <Links />
      </HomeFormsTopWrapper>
      <SaveButtonContainer>
        <Button disabled>Save</Button>
      </SaveButtonContainer>
    </Form>
  );
};

export default CustomizeLinks;

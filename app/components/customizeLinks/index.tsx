"use client";
import React from "react";
import { MainHeading, Text } from "../../styles/TypographyStyles";
import { Button } from "../../styles/FormStyles";
import Links from "./Links";
import {
  HomeFormsTopWrapper,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { Root } from "@radix-ui/react-form";
import { styled } from "styled-components";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.5rem;
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
        <Button $wFull>Save</Button>
      </SaveButtonContainer>
    </Form>
  );
};

export default CustomizeLinks;

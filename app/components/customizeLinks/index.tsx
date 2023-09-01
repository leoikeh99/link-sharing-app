"use client";
import React, { useContext } from "react";
import { MainHeading, Text } from "../../styles/TypographyStyles";
import { Button } from "../../styles/FormStyles";
import Links from "./Links";
import {
  HomeFormsTopWrapper,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { Root, Submit } from "@radix-ui/react-form";
import { styled } from "styled-components";
import UserContext from "@/app/context/UserContext";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const CustomizeLinks = (props: Props) => {
  const { links, loading, addLink, saveLinks } = useContext(UserContext);

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveLinks();
  };

  const changes = links.some((values) => values.new || values.updated);
  return (
    <Form onSubmit={submitForm}>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Customize your links</MainHeading>
        <Text $mb="2.5">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Text>
        <Button $variant="outlined" $wFull type="button" onClick={addLink}>
          + Add new link
        </Button>
        <Links />
      </HomeFormsTopWrapper>
      <SaveButtonContainer>
        <Submit asChild>
          <Button disabled={!(changes && !loading)}>Save</Button>
        </Submit>
      </SaveButtonContainer>
    </Form>
  );
};

export default CustomizeLinks;

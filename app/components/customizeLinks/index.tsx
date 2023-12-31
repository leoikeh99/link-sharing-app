"use client";
import React, { useContext } from "react";
import { MainHeading, Text } from "../../styles/TypographyStyles";
import { Button } from "../../styles/FormStyles";
import Links from "./Links";
import {
  FlexGroup,
  HomeFormsTopWrapper,
  SaveButtonContainer,
} from "@/app/styles/LayoutStyles";
import { Root, Submit } from "@radix-ui/react-form";
import { styled } from "styled-components";
import UserContext from "@/app/context/UserContext";
import Loading from "react-loading";

type Props = {};

const Form = styled(Root)`
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
`;

const CustomizeLinks = (props: Props) => {
  const { links, loading, removedLinks, addLink, saveLinks } =
    useContext(UserContext);

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveLinks();
  };

  const addNewLink = () => {
    addLink();
    setTimeout(() => {
      let linkWrapperElem = document.getElementById("links-wrapper");
      if (linkWrapperElem)
        linkWrapperElem.scrollTop = linkWrapperElem.scrollHeight;
    }, 100);
  };

  const changes =
    links.some((values) => values.new || values.updated) ||
    removedLinks?.length !== 0;

  return (
    <Form onSubmit={submitForm}>
      <HomeFormsTopWrapper>
        <MainHeading $mb="1">Customize your links</MainHeading>
        <Text $mb="2.5">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Text>
        <Button $variant="outlined" $wFull type="button" onClick={addNewLink}>
          + Add new link
        </Button>
        <Links />
      </HomeFormsTopWrapper>
      <SaveButtonContainer>
        <Submit asChild>
          <Button disabled={!(changes && !loading)}>
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

export default CustomizeLinks;

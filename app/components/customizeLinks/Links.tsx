"use client";
import React from "react";
import { styled } from "styled-components";
import LinksHeaderImage from "@/assets/images/illustration-empty.svg";
import { SubHeading, Text } from "@/app/styles/TypographyStyles";
import AddedLink from "./AddedLink";

type Props = {};

const NoLinksWrapper = styled.div`
  min-height: 21.1rem;
  place-items: center;
  align-content: center;
  padding: 1.25rem;
  margin-top: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;
  display: grid;
  justify-items: center;
  gap: 1.5rem;

  .header-icon {
    transform: scale(0.6);
  }

  h2,
  p {
    text-align: center;
    max-width: 30.5rem;
  }

  @media (min-width: 33.75em) {
    min-height: 29.3rem;
    .header-icon {
      transform: scale(1);
    }
  }
`;

const NoLinks = () => (
  <NoLinksWrapper>
    <LinksHeaderImage className="header-icon" />
    <SubHeading>Let’s get you started</SubHeading>
    <Text>
      Use the “Add new link” button to get started. Once you have more than one
      link, you can reorder and edit them. We’re here to help you share your
      profiles with everyone!
    </Text>
  </NoLinksWrapper>
);

const Links = (props: Props) => {
  return (
    <>
      {/* <NoLinks /> */}
      <AddedLink />
    </>
  );
};

export default Links;

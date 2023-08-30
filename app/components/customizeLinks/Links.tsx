"use client";
import React, { useContext } from "react";
import { styled } from "styled-components";
import LinksHeaderImage from "@/assets/images/illustration-empty.svg";
import { SubHeading, Text } from "@/app/styles/TypographyStyles";
import AddedLink from "./AddedLink";
import UserContext from "@/app/context/UserContext";

type Props = {};

const LinksWrapper = styled.div`
  height: 30.5rem;
  overflow-y: auto;
  margin-top: 1.5rem;

  &:hover::-webkit-scrollbar-thumb {
    background: #888;
    margin-left: 5px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
    margin-right: 30px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

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
  const { links } = useContext(UserContext);
  return (
    <>
      {/* <NoLinks /> */}
      <LinksWrapper>
        {links.map((link) => (
          <AddedLink key={link._id} link={link} />
        ))}
      </LinksWrapper>
    </>
  );
};

export default Links;

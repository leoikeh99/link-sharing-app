"use client";
import React, { useContext } from "react";
import UserProfile from "./UserProfile";
import { styled } from "styled-components";
import { Phone, Screen } from "./styles";
import UserContext from "@/app/context/UserContext";

type Props = {};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: var(--bg-sub);
  border-radius: 0.75rem;

  @media (max-width: 60em) {
    display: none;
  }
`;

export default function MobilePreview({}: Props) {
  const { userInfo, links, uploadImage } = useContext(UserContext);
  return (
    <Wrapper>
      <Phone>
        <Screen>
          <UserProfile
            userInfo={userInfo}
            links={links}
            uploadImage={uploadImage}
          />
        </Screen>
      </Phone>
    </Wrapper>
  );
}

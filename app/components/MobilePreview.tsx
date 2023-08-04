"use client";
import React from "react";
import UserProfile from "./UserProfile";
import { Scrollbars } from "react-custom-scrollbars-2";
import { styled } from "styled-components";

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

const Phone = styled.div`
  min-width: 19.2rem;
  min-height: 39.4rem;
  padding: 2.5rem 0.69rem 0.62rem 0.69rem;
  background-image: url(assets/images/illustration-phone-mockup.svg);
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Screen = styled.div`
  display: grid;
  justify-items: center;
  padding: 1.4rem 1.5rem 0 1.5rem;
`;

export default function MobilePreview({}: Props) {
  return (
    <Wrapper>
      <Phone>
        <Scrollbars style={{ height: "34.5rem" }}>
          <Screen>
            <UserProfile />
          </Screen>
        </Scrollbars>
      </Phone>
    </Wrapper>
  );
}

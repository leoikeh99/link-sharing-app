"use client";
import React, { useState } from "react";
import ArrowRightIcon from "@/assets/images/icon-arrow-right.svg";
import { styled } from "styled-components";
import { SocialLinks } from "../../constants";
import { FlexGroup, SpaceOut } from "../../styles/LayoutStyles";
import LinkIcon from "../ui/LinkIcon";
import {
  Avatar,
  Email,
  EmptyLink,
  Links,
  Name,
  NoAvatar,
  SocialLink,
  UserInfo,
} from "./styles";

type Props = {
  bigText?: boolean;
};

const Wrapper = styled.div`
  width: 100%;
`;

const UserProfile = ({ bigText }: Props) => {
  return (
    <Wrapper>
      <UserInfo>
        <Avatar
          src="https://avatars.dicebear.com/api/identicon/wazza.svg"
          width={96}
          height={96}
          alt="avatar"
        />
        {/* <NoAvatar /> */}
        <Name $value={"Ben Wright"} $bigText={bigText}>
          Ben Wright
        </Name>
        <Email $value={"ben@example.com"} $bigText={bigText}>
          ben@example.com
        </Email>
      </UserInfo>
      <Links>
        <SocialLink
          $bg={
            SocialLinks.find((val) => val.id === "github")?.color ||
            "hsla(0, 0%, 10%, 1)"
          }
          $bigText={bigText}
          href="/"
          target="_blank">
          <SpaceOut>
            <FlexGroup $gap="0.5">
              <LinkIcon iconKey="github" />
              <span>GitHub</span>
            </FlexGroup>
            <ArrowRightIcon />
          </SpaceOut>
        </SocialLink>
        {/* <EmptyLink />
        <EmptyLink />
        <EmptyLink />
        <EmptyLink />
        <EmptyLink /> */}
      </Links>
    </Wrapper>
  );
};

export default UserProfile;

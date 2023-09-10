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
  EmptyEmail,
  EmptyLink,
  EmptyName,
  Links,
  Name,
  NoAvatar,
  SocialLink,
  UserInfo,
} from "./styles";

type Props = {
  bigText?: boolean;
  userInfo: UserInfo;
  links: Array<UserLink>;
  uploadImage: string | null | undefined;
};

const Wrapper = styled.div`
  width: 100%;
`;

const UserProfile = ({
  bigText,
  userInfo: { firstName, lastName, displayEmail, image },
  links,
  uploadImage,
}: Props) => {
  return (
    <Wrapper>
      <UserInfo>
        <Avatar
          src={
            uploadImage
              ? uploadImage
              : image
              ? image
              : firstName || lastName
              ? `https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`
              : "https://avatars.dicebear.com/api/identicon/random.svg"
          }
          width={96}
          height={96}
          alt="avatar"
        />
        {/* <NoAvatar /> */}
        {firstName || lastName ? (
          <Name $bigText={bigText}>
            {`${firstName || ""} ${lastName || ""}`}
          </Name>
        ) : (
          <EmptyName />
        )}
        {displayEmail ? (
          <Email $bigText={bigText}>{displayEmail}</Email>
        ) : (
          <EmptyEmail />
        )}
      </UserInfo>
      <Links>
        {links
          .sort((a, b) => a.order - b.order)
          .map((link) => (
            <div key={link._id}>
              {link.platform && (
                <SocialLink
                  $colorInverse={link.platform === "frontendMentor"}
                  $bg={
                    SocialLinks.find((val) => val.id === link.platform)
                      ?.color || "hsla(0, 0%, 10%, 1)"
                  }
                  $bigText={bigText}
                  href={link.url}
                  target="_blank">
                  <SpaceOut>
                    <FlexGroup $gap="0.5">
                      <LinkIcon iconKey={link.platform} />
                      <span>
                        {
                          SocialLinks.find((val) => val.id === link.platform)
                            ?.name
                        }
                      </span>
                    </FlexGroup>
                    <ArrowRightIcon className="arrow" />
                  </SpaceOut>
                </SocialLink>
              )}
            </div>
          ))}
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

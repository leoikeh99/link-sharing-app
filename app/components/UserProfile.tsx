import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRightIcon from "@/assets/images/icon-arrow-right.svg";
import { styled } from "styled-components";
import { SocialLinks } from "../constants";
import { FlexGroup, SpaceOut } from "../styles/LayoutStyles";
import LinkIcon from "./ui/LinkIcon";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const UserInfo = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 3.5rem;
`;

const Avatar = styled(Image)`
  border: 4px solid var(--clr-primary-400);
  border-radius: 50%;
  margin-bottom: 1.56rem;
`;

const Name = styled.p`
  font-size: 1.125rem;
  font-weight: var(--fw-semi-bold);
  color: var(--clr-neutral-700);
  line-height: 150%;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  font-size: 0.875rem;
  color: var(--clr-neutral-400);
  line-height: 150%;
`;

const Links = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const SocialLink = styled(Link)<{ $bg: string }>`
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--clr-neutral-100);
  background-color: ${({ $bg }) => $bg};
  text-decoration: none;

  svg path {
    fill: var(--clr-neutral-100);
  }
`;

const UserProfile = (props: Props) => {
  return (
    <Wrapper>
      <UserInfo>
        <Avatar
          src="https://avatars.dicebear.com/api/identicon/wazza.svg"
          width={96}
          height={96}
          alt="avatar"
        />
        <Name>Ben Wright</Name>
        <Email>ben@example.com</Email>
      </UserInfo>
      <Links>
        <SocialLink
          $bg={
            SocialLinks.find((val) => val.id === "github")?.color ||
            "hsla(0, 0%, 10%, 1)"
          }
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
      </Links>
    </Wrapper>
  );
};

export default UserProfile;

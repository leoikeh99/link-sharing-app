"use client";
import React from "react";
import Image from "next/image";
import { IconLink } from "../styles/FormStyles";
import { FlexGroup, HeaderContainer, SpaceOut } from "../styles/LayoutStyles";
import { styled } from "styled-components";
import Link from "next/link";
import LinkIcon from "@/public/assets/images/icon-links-header.svg";
import ProfileIcon from "@/public/assets/images/icon-profile-details-header.svg";
import { usePathname } from "next/navigation";

const Wrapper = styled.div`
  padding: 1rem;
  background-color: var(--bg-sub);

  @media (min-width: 33.75em) {
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
  }
`;

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.69rem 1.69rem;
  font-weight: var(--fw-semi-bold);
  border: none;
  border-radius: 0.5rem;
  color: var(--clr-neutral-400);
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;

  span {
    display: none;
  }

  &:hover,
  &:focus,
  &[data-state="active"] {
    color: var(--clr-primary-400);

    svg path {
      fill: var(--clr-primary-400);
    }
  }

  &[data-state="active"] {
    background-color: var(--clr-primary-100);
  }

  @media (min-width: 48em) {
    span {
      display: inline;
    }
  }
`;

const Logo = styled.div`
  color: var(--clr-neutral-700);
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);

  p {
    display: none;
  }

  @media (min-width: 48em) {
    p {
      display: inline;
    }
  }
`;

const Header = () => {
  const pathName = usePathname();

  return (
    <HeaderContainer>
      <Wrapper>
        <SpaceOut>
          <Logo>
            <FlexGroup $gap="0.5">
              <Image
                src="/assets/images/logo-devlinks-small.svg"
                alt="home"
                width={32}
                height={32}
              />
              <p>devlinks</p>
            </FlexGroup>
          </Logo>
          <FlexGroup $gap="0">
            <LinkItem
              href="/"
              data-state={pathName === "/" ? "active" : "inactive"}
              aria-label="Links">
              <LinkIcon />
              <span>Links</span>
            </LinkItem>
            <LinkItem
              href="/profile"
              data-state={pathName === "/profile" ? "active" : "inactive"}
              aria-label="Profile Details">
              <ProfileIcon />
              <span>Profile Details</span>
            </LinkItem>
          </FlexGroup>
          <IconLink href="/preview/1" aria-label="Preview">
            <Image
              src="/assets/images/icon-preview-header.svg"
              alt="preview"
              width={20}
              height={20}
            />
            <span>Preview</span>
          </IconLink>
        </SpaceOut>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;

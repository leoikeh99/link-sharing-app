"use client";
import React from "react";
import Image from "next/image";
import { IconLink } from "../styles/FormStyles";
import { SpaceOut } from "../styles/LayoutStyles";
import { styled } from "styled-components";
import Link from "next/link";
import LinkIcon from "@/public/assets/images/icon-links-header.svg";
import ProfileIcon from "@/public/assets/images/icon-profile-details-header.svg";
import { usePathname } from "next/navigation";

const Wrapper = styled.header`
  padding: 1rem;
  background-color: var(--bg-sub);
`;

const LinkItem = styled(Link)`
  display: inline-block;
  padding: 0.69rem 1.69rem;
  font-weight: var(--fw-semi-bold);
  border: none;
  border-radius: 0.5rem;
  color: var(--clr-neutral-400);
  background-color: transparent;
  cursor: pointer;

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
`;

const Header = () => {
  const pathName = usePathname();

  return (
    <Wrapper>
      <SpaceOut>
        <Image
          src="/assets/images/logo-devlinks-small.svg"
          alt="home"
          width={32}
          height={32}
        />
        <div>
          <LinkItem
            href="/"
            data-state={pathName === "/" ? "active" : "inactive"}>
            <LinkIcon />
          </LinkItem>
          <LinkItem
            href="/profile"
            data-state={pathName === "/profile" ? "active" : "inactive"}>
            <ProfileIcon />
          </LinkItem>
        </div>
        <IconLink href="/">
          <Image
            src="/assets/images/icon-preview-header.svg"
            alt="preview"
            width={20}
            height={20}
          />
        </IconLink>
      </SpaceOut>
    </Wrapper>
  );
};

export default Header;

"use client";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const Phone = styled.div`
  min-width: 19.2rem;
  min-height: 39.4rem;
  padding: 2.5rem 0.69rem 0.62rem 0.69rem;
  background-image: url(assets/images/illustration-phone-mockup.svg);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Screen = styled.div`
  display: grid;
  justify-items: center;
  padding: 1.4rem 1.5rem 0 1.5rem;
  height: 34rem;
  overflow: auto;

  &:hover::-webkit-scrollbar-thumb {
    background: #888;
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

export const UserInfo = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 3.5rem;
`;

export const Avatar = styled(Image)`
  border: 4px solid var(--clr-primary-400);
  border-radius: 50%;
  margin-bottom: 1.56rem;
`;

export const NoAvatar = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: var(--clr-neutral-350);
  margin-bottom: 1.56rem;
`;

export const Name = styled.p<{ $value: string | null }>`
  font-size: 1.125rem;
  font-weight: var(--fw-semi-bold);
  color: var(--clr-neutral-700);
  line-height: 150%;
  margin-bottom: 0.5rem;
  ${({ $value }) => !$value && "background-color: var(--clr-neutral-350)"};
  ${({ $value }) => !$value && "min-width: 10rem; min-height: 1rem"};
  ${({ $value }) => !$value && "border-radius: 6.5rem"};
`;

export const Email = styled.p<{ $value: string | null }>`
  font-size: 0.875rem;
  color: var(--clr-neutral-400);
  line-height: 150%;
  ${({ $value }) => !$value && "background-color: var(--clr-neutral-350)"};
  ${({ $value }) => !$value && "min-width: 4.5rem; min-height: 0.5rem"};
  ${({ $value }) => !$value && "border-radius: 6.5rem"};
`;

export const Links = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const SocialLink = styled(Link)<{ $bg: string }>`
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

export const EmptyLink = styled.div`
  height: 2.75rem;
  border-radius: 0.5rem;
  background-color: var(--clr-neutral-350);
`;

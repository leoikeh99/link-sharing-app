"use client";

import { styled } from "styled-components";

export const SpaceOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexGroup = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => ($gap ? $gap : 1)}rem;
`;

export const HeaderContainer = styled.header`
  @media (min-width: 33.75em) {
    padding: 1.5rem;
  }
`;

export const HomeContainer = styled.div`
  padding: 1rem;

  @media (min-width: 33.75em) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
`;

export const HomeFormsTopWrapper = styled.div`
  padding: 1.5rem;

  @media (min-width: 33.75em) {
    padding: 2.5rem;
  }
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid var(--clr-neutral-300);

  button {
    flex: 1;
  }

  @media (min-width: 33.75em) {
    justify-content: flex-end;
    padding: 1.5rem 2.5rem;
    button {
      flex: 0;
    }
  }
`;

export const ProfileGridFlow = styled.div<{ $initialGap: string }>`
  display: grid;
  gap: ${({ $initialGap }) => $initialGap}rem;

  @media (min-width: 48em) {
    grid-template-areas: "label input";
    grid-auto-columns: 15rem auto;
    align-items: center;
    gap: 1rem;
  }
`;

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

export const HomeContainer = styled.div`
  padding: 1rem;
`;

export const HomeFormsTopWrapper = styled.div`
  padding: 1.5rem;
`;

export const SaveButtonContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--clr-neutral-300);
`;

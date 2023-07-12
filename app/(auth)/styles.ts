"use client";

import { styled } from "styled-components";

export const AuthLayoutWrapper = styled.div`
  min-height: 100dvh;
  display: grid;
  padding-block: 2rem;
`;

export const AuthContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 4.47rem;
  width: 100%;
  max-width: min(29.7rem, 84vw);
  margin-inline: auto;
`;

export const AuthBox = styled.div`
  // background: var(--bg-sub);
`;

export const Question = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 1.5rem;

  a {
    text-align: center;
    color: var(--clr-primary-400);
    text-decoration: none;
  }
`;

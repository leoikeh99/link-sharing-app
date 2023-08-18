"use client";

import { styled } from "styled-components";

export const AuthLayoutWrapper = styled.div`
  min-height: 100dvh;
  display: grid;
  padding-block: 2rem;

  @media (min-width: 33.75em) {
    place-items: center;
  }
`;

export const AuthContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 4.47rem;
  width: 100%;
  max-width: min(29.75rem, 84vw);
  margin-inline: auto;

  @media (min-width: 33.75em) {
    gap: 3.19rem;

    & > img {
      margin-inline: auto;
    }
  }
`;

export const AuthBox = styled.div`
  @media (min-width: 33.75em) {
    background: var(--bg-sub);
    padding: 2.5rem;
    border-radius: 0.5rem;
  }
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

"use client";
import { styled } from "styled-components";

export const Header = styled.header`
  @media (min-width: 37.5em) {
    padding: 1.5rem;
    background: var(--clr-primary-400);
    min-height: 22.3rem;
    border-radius: 0 0 2rem 2rem;
  }
`;

export const HeaderContent = styled.div`
  background-color: var(--bg-sub);
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border-radius: 0.75rem;

  button,
  a {
    padding: 0.69rem 1rem;
    font-size: 0.875rem;
  }

  @media (min-width: 37.5em) {
    button,
    a {
      padding: 0.69rem 1.69rem;
    }
  }

  @media (min-width: 37.5em) {
    button,
    a {
      font-size: var(--fs-base);
    }
  }

  @media (min-width: 37.5em) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MainContent = styled.div`
  background-color: var(--bg-sub);
  min-height: calc(100dvh - 80.26px);
  margin-inline: auto;
  padding-top: 3.75rem;
  border-radius: 1.5rem;

  @media (min-width: 37.5em) {
    margin-top: -8rem;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
    max-width: 21.8rem;
    min-height: fit-content;
    padding: 3rem 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 14.8rem;
  margin-inline: auto;
`;

"use client";
import { styled } from "styled-components";

export const Header = styled.header``;

export const HeaderContent = styled.div`
  background-color: var(--bg-sub);
  padding: 1rem 1.5rem;
  display: grid;
  justify-items: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button,
  a {
    padding: 0.69rem 1rem;
    font-size:0.875rem;
  }

  @media (min-width: 24.063) {
    button,
    a {
      padding: 0.69rem 1.69rem;
    }
  }

  @media (min-width: 22.5em) {
    button,
  a {
    font-size:var(--fs-base);
  }
`;

export const MainContent = styled.div`
  background-color: var(--bg-sub);
  min-height: calc(100dvh - 80.26px);
  //   max-width: 21.8rem;
  margin-inline: auto;
  padding-top: 3.75rem;
`;

export const ContentContainer = styled.div`
  max-width: 14.8rem;
  margin-inline: auto;
`;

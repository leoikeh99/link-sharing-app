"use client";

import styled from "styled-components";
import { MainHeading } from "../styles/TypographyStyles";
import { Button } from "../styles/FormStyles";

const Wrapper = styled.section`
  min-height: calc(100dvh - 110px);
  background-color: var(--bg-sub);
  border-radius: 0.75rem;
  display: grid;
  place-items: center;

  @media (min-width: 33.75em) {
    min-height: calc(100dvh - 150px);
  }

  @media (min-width: 48em) {
    min-height: calc(100dvh - 160px);
  }
`;

const InnerContainer = styled.div`
  max-width: 25rem;
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 20px;

  h1 {
    line-height: 100%;
    margin-bottom: 2rem;
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Wrapper>
      <InnerContainer>
        <p style={{ fontSize: "4rem", marginBottom: "1rem" }}>😕</p>
        <MainHeading>Something went wrong</MainHeading>
        <Button onClick={() => reset()}>Try again</Button>
      </InnerContainer>
    </Wrapper>
  );
}

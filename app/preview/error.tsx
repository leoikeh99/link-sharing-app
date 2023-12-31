"use client";

import styled from "styled-components";
import { MainHeading } from "../styles/TypographyStyles";
import { BtnLink, Button } from "../styles/FormStyles";
import { useSession } from "next-auth/react";

const Wrapper = styled.div`
  background-color: var(--bg-sub);
  min-height: calc(100dvh - 80.26px);
  margin-inline: auto;
  padding-top: 3.75rem;
  border-radius: 1.5rem;
  display: grid;
  place-items: center;

  @media (max-width: 17.5em) {
    padding: 3.75rem 1.25rem 0 1.25rem;
  }

  @media (min-width: 37.5em) {
    margin-top: -8rem;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
    max-width: 21.8rem;
    min-height: 25rem;
    padding: 3rem 0;
  }
`;

const InnerContainer = styled.div`
  max-width: 25rem;
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: -100px;
  padding-inline: 20px;

  h1 {
    line-height: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 37.5em) {
    padding-inline: 0;
    margin-top: 0;
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const session = useSession();
  return (
    <Wrapper>
      <InnerContainer>
        <p style={{ fontSize: "4rem" }}>😕</p>
        <MainHeading>
          Something went wrong, check the url and try again
        </MainHeading>
        <Button
          onClick={() => window.location.reload()}
          style={{ marginBottom: "5px" }}
        >
          Reload
        </Button>
        {session && (
          <BtnLink href="/" $variant="outlined">
            Back to Editor
          </BtnLink>
        )}
      </InnerContainer>
    </Wrapper>
  );
}

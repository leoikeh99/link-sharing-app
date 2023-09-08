"use client";
import React from "react";
import Loading from "react-loading";
import styled from "styled-components";

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
    min-height: 23rem;
    padding: 3rem 0;
  }
`;

const LoadingBoundary = () => {
  return (
    <Wrapper>
      <Loading type="spin" color="var(--clr-primary-400)" />
    </Wrapper>
  );
};

export default LoadingBoundary;

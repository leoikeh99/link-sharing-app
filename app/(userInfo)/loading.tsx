"use client";
import React from "react";
import Loading from "react-loading";
import styled from "styled-components";

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

const loading = () => {
  return (
    <Wrapper>
      <Loading type="spin" color="var(--clr-primary-400)" />
    </Wrapper>
  );
};

export default loading;

"use client";

import { styled } from "styled-components";

type Typography = {
  $mt?: string;
  $mb?: string;
  $talign?: string;
};

export const MainHeading = styled.h1<Typography>`
  font-size: var(--fs-heading);
  font-weight: var(--fw-bold);
  color: var(--clr-heading);
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
  ${({ $mb }) => $mb && `margin-bottom:${$mb}rem;`}
  ${({ $talign }) => $talign && `text-align:${$talign};`}
`;

export const Text = styled.p<Typography>`
  font-size: var(--fs-text);
  font-weight: var(--fw-regular);
  color: var(--clr-text);
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
  ${({ $mb }) => $mb && `margin-bottom:${$mb}rem;`}
  ${({ $talign }) => $talign && `text-align:${$talign};`}
`;

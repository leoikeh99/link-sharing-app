"use client";

import { styled } from "styled-components";

export const MainHeading = styled.h1<Typography>`
  font-size: var(--fs-heading);
  font-weight: var(--fw-bold);
  color: var(--clr-heading);
  line-height: 150%;
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
  ${({ $mb }) => $mb && `margin-bottom:${$mb}rem;`}
  ${({ $talign }) => $talign && `text-align:${$talign};`}
`;

export const SubHeading = styled.h2<Typography>`
  font-size: var(--fs-heading);
  font-weight: var(--fw-bold);
  color: var(--clr-heading);
  line-height: 150%;
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
  ${({ $mb }) => $mb && `margin-bottom:${$mb}rem;`}
  ${({ $talign }) => $talign && `text-align:${$talign};`}
`;

export const Text = styled.p<Typography>`
  font-size: ${({ $size }) =>
    $size ? `var(--fs-${$size})` : "var(--fs-text)"};
  font-weight: ${({ $weight }) =>
    $weight ? `var(--fw-${$weight})` : "var(--fw-regular)"};
  line-height: 150%;
  color: var(--clr-text);
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
  ${({ $mb }) => $mb && `margin-bottom:${$mb}rem;`}
  ${({ $talign }) => $talign && `text-align:${$talign};`}
`;

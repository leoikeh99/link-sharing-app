"use client";

import { styled } from "styled-components";
import * as RadixForm from "@radix-ui/react-form";

type ButtonProps = {
  $variant?: "outlined" | "contained";
};

export const Form = styled(RadixForm.Root)<{ $spacing?: string }>`
  display: grid;
  ${({ $spacing }) => $spacing && `gap:${$spacing}rem;`}
`;

export const Label = styled(RadixForm.Label)`
  display: block;
  color: var(--clr-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  margin-bottom: 0.2rem;
`;

export const FormControl = styled(RadixForm.FormControl)`
  flex: 1;
  display: block;
  padding-block: 0.75rem;
  padding-right: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const FormControlCover = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 1rem;
  border: 1px solid var(--clr-neutral-300);
  border-radius: 0.5rem;
  overflow: hidden;

  &:has(input[data-invalid="true"]) {
    border-color: var(--clr-accent-400);
  }

  &:has(input[data-valid="true"]):focus-within {
    outline: 1px solid var(--clr-primary-400);
    box-shadow: 0px 0px 32px 0px var(--clr-primary-300);
  }
`;

export const FormMessage = styled(RadixForm.FormMessage)`
  width: fit-content;
  display: block;
  color: var(--clr-accent-400);
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: 33.75em) {
    right: 1rem;
    position: relative;
  }
`;

export const FormField = styled(RadixForm.FormField)`
  position: relative;

  &[data-invalid="true"] label {
    color: var(--clr-accent-400);
  }
`;

export const FormSubmit = styled(RadixForm.FormSubmit)``;

export const Button = styled.button<ButtonProps>`
  padding: 0.69rem 1.69rem;
  font-weight: var(--fw-semi-bold);
  border: ${({ $variant }) =>
    $variant === "outlined" ? "1px solid var(--clr-primary-400)" : "none"};
  border-radius: 0.5rem;
  color: ${({ $variant }) =>
    $variant === "outlined"
      ? "var(--clr-primary-400)"
      : "var(--clr-neutral-100)"};
  background-color: ${({ $variant }) =>
    $variant === "outlined" ? "transparent" : "var(--clr-primary-400)"};
  cursor: pointer;

  &:hover:enabled,
  &:focus:enabled {
    background-color: ${({ $variant }) =>
      $variant === "outlined"
        ? "var(--clr-primary-100)"
        : "var(--clr-primary-200)"};
  }

  &:disabled,
  &[disabled] {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

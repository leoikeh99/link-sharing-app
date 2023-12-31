"use client";

import { styled } from "styled-components";
import * as RadixForm from "@radix-ui/react-form";
import * as RadixSelect from "@radix-ui/react-select";
import Link from "next/link";

type ButtonProps = {
  $variant?: "outlined" | "contained";
  $wFull?: boolean;
};

export const Form = styled(RadixForm.Root)<{ $spacing?: string }>`
  display: grid;
  ${({ $spacing }) => $spacing && `gap:${$spacing}rem;`};
`;

export const Label = styled(RadixForm.Label)<{ $mt?: string }>`
  display: block;
  color: var(--clr-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  margin-bottom: 0.2rem;
  ${({ $mt }) => $mt && `margin-top:${$mt}rem;`}
`;

export const FormControl = styled(RadixForm.FormControl)`
  width: 100%;
  flex: 1;
  display: block;
  padding-block: 0.75rem;
  padding-right: 1rem;
  border: none;
  font-size: var(--fw-regular);
  color: var(--clr-neutral-700);
  caret-color: var(--clr-primary-400);

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

  &:has(input):focus-within {
    border-color: var(--clr-primary-400);
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
  display: flex;
  justify-content: center;
  padding: 0.69rem 1.69rem;
  font-size: var(--fs-base);
  font-weight: var(--fw-semi-bold);
  ${({ $wFull }) => $wFull && "width:100%;"}
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
  text-align: center;

  &:hover:enabled,
  &:active {
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

export const BtnLink = styled(Link)<ButtonProps>`
  padding: 0.69rem 1.69rem;
  font-size: var(--fs-base);
  font-weight: var(--fw-semi-bold);
  ${({ $wFull }) => $wFull && "width:100%;"}
  border: ${({ $variant }) =>
    $variant === "outlined" ? "1px solid var(--clr-primary-400)" : "none"};
  border-radius: 0.5rem;
  color: ${({ $variant }) =>
    $variant === "outlined"
      ? "var(--clr-primary-400)"
      : "var(--clr-neutral-100)"};
  background-color: ${({ $variant }) =>
    $variant === "outlined" ? "transparent" : "var(--clr-primary-400)"};
  text-decoration: none;
  text-align: center;
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

export const IconLink = styled(Link)`
  display: inline-block;
  padding: 0.69rem 1rem;
  font-weight: var(--fw-semi-bold);
  border: 1px solid var(--clr-primary-400);
  border-radius: 0.5rem;
  color: var(--clr-primary-400);
  background-color: transparent;
  text-decoration: none;

  span {
    display: none;
  }

  &:hover,
  &:focus {
    background-color: var(--clr-primary-100);
  }

  @media (min-width: 33.75em) {
    padding-inline: 1.69rem;
  }

  @media (min-width: 48em) {
    span {
      display: inline;
    }

    img {
      display: none;
    }
  }
`;

export const Trigger = styled(RadixSelect.Trigger)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-neutral-700);
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-neutral-300);
  border-radius: 0.5rem;
  background-color: var(--clr-neutral-100);
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
    outline: 1px solid var(--clr-primary-400);
    border-color: none;
  }
`;

export const Content = styled(RadixSelect.Content)`
  background-color: var(--clr-neutral-100);
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  border-radius: 0.5rem;
`;

export const Item = styled(RadixSelect.Item)`
  padding: 0.75rem 1rem 0.75rem 0;
  border-bottom: 1px solid var(--clr-neutral-300);
  color: var(--clr-neutral-700);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &[data-highlighted] {
    outline: none;
    color: var(--clr-primary-400);

    svg path {
      fill: var(--clr-primary-400);
    }
  }
`;

export const ScrollDownButton = styled(RadixSelect.ScrollDownButton)`
  display: flex;
  justify-content: center;
`;

export const LogoutBtn = styled.button`
  padding: 0.3rem 0.5rem;
  border: 0;
  background-color: #ef5350;
  color: #fff;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semi-bold);
  border-radius: 0.5rem;
  cursor: pointer;
`;

"use client";
import React, { useState } from "react";
import DangerIcon from "@/assets/images/icon-error.svg";
import CloseIcon from "@/assets/images/icon-close.svg";
import { styled } from "styled-components";
import { FlexGroup, SpaceOut } from "@/app/styles/LayoutStyles";

type Props = {
  type: "success" | "danger" | "warning" | "info";
  message: string;
  isOpen: string | boolean;
  close: () => void;
};

const Wrapper = styled.div<{
  $type: "success" | "danger" | "warning" | "info";
}>`
  background-color: ${({ $type }) => colors[$type].light};
  border: 1px solid ${({ $type }) => colors[$type].dark};
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.8rem 1rem;

  p {
    line-height: 0;
  }
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg path {
    transition: fill 0.2s ease-in;
    fill: #625d5d;
  }

  &:hover {
    svg path {
      fill: #343434;
    }
  }
`;

const Alert = ({ type, message, isOpen, close }: Props) => {
  return (
    <>
      {isOpen && (
        <Wrapper $type={type}>
          <SpaceOut>
            <FlexGroup $gap="0.5">
              <DangerIcon />
              <p>{message}</p>
            </FlexGroup>
            <CloseBtn type="button" onClick={close}>
              <CloseIcon />
            </CloseBtn>
          </SpaceOut>
        </Wrapper>
      )}
    </>
  );
};

export default Alert;

const colors = {
  danger: {
    light: "#fff2f0",
    dark: "#ffccc7",
  },
  success: { light: "", dark: "" },
  warning: { light: "", dark: "" },
  info: { light: "", dark: "" },
};

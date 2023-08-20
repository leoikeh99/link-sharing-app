"use client";
import React from "react";
import CloseIcon from "@/assets/images/icon-close.svg";
import {
  CheckCircledIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { styled } from "styled-components";
import { FlexGroup, SpaceOut } from "@/app/styles/LayoutStyles";

type AlertTypes = "success" | "danger" | "warning" | "info";

type Props = {
  type: AlertTypes;
  message: string;
  isOpen: string | boolean;
  close: () => void;
};

const Wrapper = styled.div<{
  $type: AlertTypes;
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
        <Wrapper $type={type} aria-live="polite">
          <SpaceOut>
            <FlexGroup $gap="0.5">
              {icons[type]}
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
  danger: { light: "#fff2f0", dark: "#ffccc7" },
  success: { light: "#f6ffed", dark: "#b7eb8f" },
  warning: { light: "#fffbe6", dark: "#ffe58f" },
  info: { light: "#e6f4ff", dark: "#91caff" },
};

const icons = {
  success: <CheckCircledIcon color="#52c41a" />,
  danger: <CrossCircledIcon color="#ff4d4f" />,
  info: <InfoCircledIcon color="#1677ff" />,
  warning: <ExclamationTriangleIcon color="#faad14" />,
};

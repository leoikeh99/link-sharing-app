import React, { useContext } from "react";
import { keyframes, styled } from "styled-components";
import SaveIcon from "@/assets/images/icon-changes-saved.svg";
import AlertContext from "@/app/context/AlertContext";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

const popIn = keyframes`
0% {
  transform:scale(0);
}
10%{
  transform:scale(1);
} 

90%{
  opacity:1;
  transform:scale(1);
}
100% {
  opacity:0;
  transform:scale(0.7);
}
`;

const Wrapper = styled.ul`
  width: 100vw;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  max-width: 97%;
  transform: translateX(-50%);
  z-index: 3;

  @media (min-width: 28.125em) {
    max-width: 30rem;
  }
`;

const Alert = styled.li<{ type: AlertTypes }>`
  font-size: var(--fs-base);
  font-weight: var(--fw-semi-bold);
  color: var(--clr-neutral-200);
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background-color: ${({ type }) => colors[type]};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: fit-content;
  margin-inline: auto;
  margin-bottom: 0.5rem;
  animation: 2.97s ${popIn} ease-out forwards;

  svg {
    min-width: 22px;
  }
`;

const Alerts = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <Wrapper>
      {alerts.map((alert) => (
        <Alert key={alert.id} type={alert.type}>
          {icons[alert.type]}
          <span>{alert.message}</span>
        </Alert>
      ))}
    </Wrapper>
  );
};

export default Alerts;

const colors = {
  danger: "#ef5350",
  success: "#333333",
  warning: "#efcc00",
  info: "#008b8b",
};

const icons = {
  success: <CheckCircledIcon height={22} width={22} />,
  danger: <CrossCircledIcon height={22} width={22} />,
  info: <InfoCircledIcon height={22} width={22} />,
  warning: <ExclamationTriangleIcon height={22} width={22} />,
};

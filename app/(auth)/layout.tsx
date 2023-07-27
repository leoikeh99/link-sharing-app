import Image from "next/image";
import React from "react";
import { AuthContainer, AuthLayoutWrapper } from "./styles";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthLayoutWrapper>
      <AuthContainer>
        <Image
          src="/assets/images/logo-devlinks-large.svg"
          alt="devlinks logo"
          height={40}
          width={182.5}
          priority={true}
        />
        {children}
      </AuthContainer>
    </AuthLayoutWrapper>
  );
}

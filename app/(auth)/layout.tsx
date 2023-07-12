import Image from "next/image";
import Logo from "@/assets/images/logo-devlinks-large.svg";
import React from "react";
import { AuthContainer, AuthLayoutWrapper } from "./styles";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AuthLayoutWrapper>
        <AuthContainer>
          <Image src={Logo} alt="devlinks logo" priority={true} />
          {children}
        </AuthContainer>
      </AuthLayoutWrapper>
    </main>
  );
}

import Image from "next/image";
import React from "react";
import { AuthContainer, AuthLayoutWrapper } from "./styles";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  if (session) redirect("/");

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

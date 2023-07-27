import React from "react";
import Header from "../components/Header";
import { HomeContainer } from "../styles/LayoutStyles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <HomeContainer>{children}</HomeContainer>
    </>
  );
}

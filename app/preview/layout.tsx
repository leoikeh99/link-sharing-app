import React from "react";
import PreviewHeader from "../components/PreviewHeader";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PreviewHeader />
      {children}
    </div>
  );
}

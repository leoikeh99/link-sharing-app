"use client";
import React, { useContext } from "react";
import { BtnLink, Button } from "../styles/FormStyles";
import { Header, HeaderContent } from "../preview/styles";
import { useSession } from "next-auth/react";
import AlertContext from "../context/AlertContext";

const PreviewHeader = () => {
  const { createAlert } = useContext(AlertContext);
  const session = useSession();

  const copyUserLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    createAlert("clipboard", "The link has been copied to your clipboard!");
  };

  return (
    <Header>
      <HeaderContent>
        {session.status === "unauthenticated" ? (
          <BtnLink href="/register" $variant="outlined">
            Sign Up
          </BtnLink>
        ) : (
          <BtnLink href="/" $variant="outlined">
            Back to Editor
          </BtnLink>
        )}
        <Button onClick={copyUserLink}>Share Link</Button>
      </HeaderContent>
    </Header>
  );
};

export default PreviewHeader;

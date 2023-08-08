"use client";
import React from "react";
import { BtnLink, Button } from "../styles/FormStyles";
import { Header, HeaderContent } from "../preview/styles";

const PreviewHeader = () => {
  return (
    <Header>
      <HeaderContent>
        <BtnLink href="/" $variant="outlined">
          Back to Editor
        </BtnLink>
        <Button>Share Link</Button>
      </HeaderContent>
    </Header>
  );
};

export default PreviewHeader;

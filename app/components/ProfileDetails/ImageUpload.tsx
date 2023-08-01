import React from "react";
import { Text } from "@/app/styles/TypographyStyles";
import { styled } from "styled-components";
import ImageIcon from "@/assets/images/icon-upload-image.svg";
import { ProfileGridFlow } from "@/app/styles/LayoutStyles";

type Props = {};

const Wrapper = styled.div`
  padding: 1.25rem;
  margin-top: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;
`;

const UploadContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 48em) {
    grid-template-columns: auto auto;
    align-items: center;
  }
`;

const UploadBtn = styled.button`
  min-height: 12rem;
  min-width: 12rem;
  max-width: 12rem;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.5rem;
  color: var(--clr-primary-400);
  font-weight: var(--fw-semi-bold);
  background-color: var(--clr-primary-100);
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
`;

const ImageUpload = (props: Props) => {
  return (
    <Wrapper>
      <ProfileGridFlow $initialGap="1">
        <Text>Profile picture</Text>
        <UploadContainer>
          <UploadBtn>
            <ImageIcon />+ Upload Image
          </UploadBtn>
          <Text $size="sm">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </Text>
        </UploadContainer>
      </ProfileGridFlow>
    </Wrapper>
  );
};

export default ImageUpload;

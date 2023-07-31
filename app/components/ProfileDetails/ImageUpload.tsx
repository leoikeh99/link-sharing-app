import React from "react";
import { Text } from "@/app/styles/TypographyStyles";
import { styled } from "styled-components";
import ImageIcon from "@/assets/images/icon-upload-image.svg";

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
`;

const UploadBtn = styled.button`
  display: grid;
  place-items: center;
  gap: 0.5rem;
  padding: 3.81rem 2.38rem 3.75rem 2.44rem;
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
      <Text>Profile picture</Text>
      <UploadContainer>
        <UploadBtn>
          <ImageIcon />+ Upload Image
        </UploadBtn>
        <Text $size="sm">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </UploadContainer>
    </Wrapper>
  );
};

export default ImageUpload;

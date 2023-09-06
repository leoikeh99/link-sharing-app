import React, { useState, useContext } from "react";
import { Text } from "@/app/styles/TypographyStyles";
import { styled } from "styled-components";
import ImageIcon from "@/assets/images/icon-upload-image.svg";
import { ProfileGridFlow } from "@/app/styles/LayoutStyles";
import UserContext from "@/app/context/UserContext";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.div`
  padding: 1.25rem;
  margin-top: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;
`;

const UploadContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 45em) {
    grid-template-columns: auto auto;
    align-items: center;
  }
`;

const UploadBtn = styled.div<{ $image: string | null }>`
  position: relative;
  min-height: 12rem;
  min-width: 12rem;
  max-width: 12rem;
  position: relative;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  color: ${({ $image }) =>
    $image ? "var(--clr-neutral-100)" : "var(--clr-primary-400)"};
  font-weight: var(--fw-semi-bold);
  background-color: var(--clr-primary-100);
  border-radius: 0.75rem;
  border: none;
  overflow: hidden;

  span {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${({ $image }) =>
    $image &&
    `&:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    background-image:url(${$image});  
    background-size: cover;
    background-position: center;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    background-color: #000;
    opacity: 0.5;  
  }`}

  svg path {
    fill: ${({ $image }) => $image && "var(--clr-neutral-100)"};
  }
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 12rem;
  opacity: 0;
  cursor: pointer;
`;

const ImageUpload = ({ onChange }: Props) => {
  const {
    uploadImage,
    userInfo: { image },
  } = useContext(UserContext);

  return (
    <Wrapper>
      <ProfileGridFlow $initialGap="1">
        <Text>Profile picture</Text>
        <UploadContainer>
          <UploadBtn $image={uploadImage || null}>
            <span>
              <FileInput
                type="file"
                name="avatar"
                id="avatar"
                onChange={onChange}
              />
              <ImageIcon />+ Upload Image
            </span>
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

import React from "react";
import { FlexGroup, SpaceOut } from "@/app/styles/LayoutStyles";
import DnDIcon from "@/assets/images/icon-drag-and-drop.svg";
import LinksSelect from "../forms/LinksSelect";
import {
  FormControl,
  FormControlCover,
  FormField,
  FormMessage,
  Label,
} from "@/app/styles/FormStyles";
import Image from "next/image";
import { Message } from "@radix-ui/react-form";
import { Text } from "@/app/styles/TypographyStyles";
import { styled } from "styled-components";

const RemoveBtn = styled.button`
  font-size: var(--fs-base);
  font-weight: var(--fw-regukar);
  color: var(--clr-neutral-400);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const AddedLink = () => {
  return (
    <>
      {" "}
      <SpaceOut>
        <FlexGroup $gap="0.5">
          <DnDIcon /> <Text $weight="bold">Link #1</Text>
        </FlexGroup>
        <RemoveBtn>Remove</RemoveBtn>
      </SpaceOut>
      <FormField name="selectLink">
        <Label $mt="0.75">Platform</Label>
        <LinksSelect />
      </FormField>
      <FormField name="url">
        <Label $mt="0.75">Link</Label>
        <FormControlCover>
          <Image
            src="/assets/images/icon-link.svg"
            alt="email icon"
            height={16}
            width={16}
          />
          <FormControl
            type="text"
            name="url"
            required
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
        </FormControlCover>
      </FormField>
    </>
  );
};

export default AddedLink;

"use client";
import React, { useContext } from "react";
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
import UserContext from "@/app/context/UserContext";
import { validateUserProfileUrl } from "@/app/utils";

const Wrapper = styled.div`
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;
`;

const RemoveBtn = styled.button`
  font-size: var(--fs-base);
  font-weight: var(--fw-regukar);
  color: var(--clr-neutral-400);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const AddedLink = ({ link }: { link: UserLink }) => {
  const { links, updateUrl } = useContext(UserContext);
  const url = links.find((values) => values._id === link._id)?.url;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateUrl(link._id, e.target.value);

  return (
    <Wrapper>
      <SpaceOut>
        <FlexGroup $gap="0.5">
          <DnDIcon /> <Text $weight="bold">Link #{link.order}</Text>
        </FlexGroup>
        <RemoveBtn>Remove</RemoveBtn>
      </SpaceOut>
      <FormField name="selectLink">
        <Label $mt="0.75">Platform</Label>
        <LinksSelect link={link} />
      </FormField>
      <FormField name={`url-${link._id}`}>
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
            name={`url-${link._id}`}
            value={url || ""}
            onChange={onChange}
            required
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
          <Message
            match={() =>
              link.platform
                ? !validateUserProfileUrl(link.platform, url || "")
                : false
            }>
            <FormMessage>Invalid url</FormMessage>
          </Message>
        </FormControlCover>
      </FormField>
    </Wrapper>
  );
};

export default AddedLink;

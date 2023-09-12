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
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

const DragHandle = styled.button`
  background: none;
  border: none;
  cursor: grab;
  touch-action: manipulation;
`;

const AddedLink = ({ link }: { link: UserLink }) => {
  const { links, updateUrl, removeLink } = useContext(UserContext);
  const url = links.find((values) => values._id === link._id)?.url;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: link._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateUrl(link._id, e.target.value);

  return (
    <Wrapper ref={setNodeRef} style={style}>
      <SpaceOut>
        <DragHandle type="button" {...attributes} {...listeners}>
          <FlexGroup $gap="0.5">
            <DnDIcon /> <Text $weight="bold">Link #{link.order}</Text>
          </FlexGroup>
        </DragHandle>
        <RemoveBtn onClick={() => removeLink(link._id)} type="button">
          Remove
        </RemoveBtn>
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
          <Message match={() => !link.platform}>
            <FormMessage>Select Platform</FormMessage>
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

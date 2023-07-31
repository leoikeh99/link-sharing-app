import {
  FormControl,
  FormControlCover,
  FormField,
  FormMessage,
  Label,
} from "@/app/styles/FormStyles";
import { Message } from "@radix-ui/react-form";
import React from "react";
import { styled } from "styled-components";

type Props = {};

const Wrapper = styled.div`
  padding: 1.25rem;
  margin-top: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;
`;

const ProfileInfo = (props: Props) => {
  return (
    <Wrapper>
      <FormField name="firstname">
        <Label htmlFor="firstname">First name*</Label>
        <FormControlCover>
          <FormControl
            type="text"
            name="firstname"
            required
            placeholder="e.g. Ben"
          />
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
        </FormControlCover>
      </FormField>
      <FormField name="lastname">
        <Label $mt="0.75" htmlFor="lastname">
          Last name*
        </Label>
        <FormControlCover>
          <FormControl
            type="text"
            name="lastname"
            required
            placeholder="e.g. Wright"
          />
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
        </FormControlCover>
      </FormField>
      <FormField name="email">
        <Label $mt="0.75" htmlFor="email">
          Email*
        </Label>
        <FormControlCover>
          <FormControl
            type="email"
            name="email"
            required
            placeholder="e.g. abc@example.com"
          />
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
        </FormControlCover>
      </FormField>
    </Wrapper>
  );
};

export default ProfileInfo;

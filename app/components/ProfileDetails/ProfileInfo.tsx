import {
  FormControl,
  FormControlCover,
  FormField,
  FormMessage,
  Label,
} from "@/app/styles/FormStyles";
import { ProfileGridFlow } from "@/app/styles/LayoutStyles";
import { Message } from "@radix-ui/react-form";
import React from "react";
import { styled } from "styled-components";

type Props = {};

const Wrapper = styled.div`
  padding: 1.25rem;
  margin-top: 1.5rem;
  background-color: var(--clr-neutral-200);
  border-radius: 0.75rem;

  label {
    color: var(--clr-text);
  }

  .mb {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 48em) {
    label {
      font-size: var(--fs-base);
    }
  }
`;

const ProfileInfo = (props: Props) => {
  return (
    <Wrapper>
      <FormField name="firstname" className="mb">
        <ProfileGridFlow $initialGap="0.25">
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
        </ProfileGridFlow>
      </FormField>
      <FormField name="lastname" className="mb">
        <ProfileGridFlow $initialGap="0.25">
          <Label htmlFor="lastname">Last name*</Label>
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
        </ProfileGridFlow>
      </FormField>
      <FormField name="email">
        <ProfileGridFlow $initialGap="0.25">
          <Label htmlFor="email">Email*</Label>
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
        </ProfileGridFlow>
      </FormField>
    </Wrapper>
  );
};

export default ProfileInfo;

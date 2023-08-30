import React, { useContext } from "react";
import {
  FormControl,
  FormControlCover,
  FormField,
  FormMessage,
  Label,
} from "@/app/styles/FormStyles";
import { ProfileGridFlow } from "@/app/styles/LayoutStyles";
import { Message } from "@radix-ui/react-form";
import { styled } from "styled-components";
import UserContext from "@/app/context/UserContext";

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

  @media (min-width: 45em) {
    label {
      font-size: var(--fs-base);
    }
  }
`;

const ProfileInfo = (props: Props) => {
  const {
    userInfo: { firstName, lastName, displayEmail },
    updateInfo,
  } = useContext(UserContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateInfo(e.target.name, e.target.value);

  return (
    <Wrapper>
      <FormField name="firstName" className="mb">
        <ProfileGridFlow $initialGap="0.25">
          <Label htmlFor="firstName">First name*</Label>
          <FormControlCover>
            <FormControl
              type="text"
              name="firstName"
              value={firstName || ""}
              onChange={onChange}
              required
              placeholder="e.g. Ben"
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Can't be empty</FormMessage>
            </Message>
          </FormControlCover>
        </ProfileGridFlow>
      </FormField>
      <FormField name="lastName" className="mb">
        <ProfileGridFlow $initialGap="0.25">
          <Label htmlFor="lastName">Last name*</Label>
          <FormControlCover>
            <FormControl
              type="text"
              name="lastName"
              value={lastName || ""}
              onChange={onChange}
              required
              placeholder="e.g. Wright"
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Can't be empty</FormMessage>
            </Message>
          </FormControlCover>
        </ProfileGridFlow>
      </FormField>
      <FormField name="displayEmail">
        <ProfileGridFlow $initialGap="0.25">
          <Label htmlFor="displayEmail">Email*</Label>
          <FormControlCover>
            <FormControl
              type="email"
              name="displayEmail"
              value={displayEmail || ""}
              onChange={onChange}
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

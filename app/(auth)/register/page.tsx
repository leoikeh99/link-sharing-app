"use client";
import React from "react";
import { AuthBox, Question } from "../styles";
import { MainHeading, Text } from "@/app/styles/TypographyStyles";
import {
  Button,
  Form,
  FormControl,
  FormControlCover,
  FormField,
  FormMessage,
  Label,
} from "@/app/styles/FormStyles";
import EmailIcon from "@/assets/images/icon-email.svg";
import PasswordIcon from "@/assets/images/icon-password.svg";
import Image from "next/image";
import Link from "next/link";
import { Message, Submit } from "@radix-ui/react-form";

export default function Register() {
  return (
    <AuthBox>
      <MainHeading $mb="0.5">Create account</MainHeading>
      <Text $mb="2.5">Let’s get you started sharing your links!</Text>

      <Form $spacing="1.5">
        <FormField name="email">
          <Label htmlFor="email">Email address</Label>
          <FormControlCover>
            <Image src={EmailIcon} alt="email icon" />
            <FormControl
              type="email"
              name="email"
              required
              placeholder="e.g. alex@email.com"
            />
          </FormControlCover>
          <Message match="valueMissing" asChild>
            <FormMessage>Can't be empty</FormMessage>
          </Message>
          <Message match="typeMismatch" asChild>
            <FormMessage>Invalid email</FormMessage>
          </Message>
        </FormField>
        <FormField name="password">
          <Label htmlFor="password">Password</Label>
          <FormControlCover>
            <Image src={PasswordIcon} alt="password icon" />
            <FormControl
              type="password"
              name="password"
              required
              placeholder="At least 8 characters"
            />
          </FormControlCover>
          <Message match="valueMissing" asChild>
            <FormMessage>Please check again</FormMessage>
          </Message>
          <Message match={(value, formData) => value.trim().length < 7} asChild>
            <FormMessage>Please check again</FormMessage>
          </Message>
        </FormField>
        <FormField name="confirmPassword">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <FormControlCover>
            <Image src={PasswordIcon} alt="password icon" />
            <FormControl
              type="password"
              name="confirmPassword"
              required
              placeholder="At least 8 characters"
            />
          </FormControlCover>
          <Message match="valueMissing" asChild>
            <FormMessage>Please check again</FormMessage>
          </Message>
          <Message match={(value, formData) => value.trim().length < 7} asChild>
            <FormMessage>Please check again</FormMessage>
          </Message>
          <Text $size="sm" $mt="1.5">
            Password must contain at least 8 characters
          </Text>
        </FormField>
        <Submit asChild>
          <Button>Create new account</Button>
        </Submit>
      </Form>
      <Question>
        <Text $talign="center">Already have an account? </Text>
        <Link href="/login">Login</Link>
      </Question>
    </AuthBox>
  );
}

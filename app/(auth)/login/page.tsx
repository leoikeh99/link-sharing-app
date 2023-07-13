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

export default function Login() {
  return (
    <AuthBox>
      <MainHeading $mb="0.5">Login</MainHeading>
      <Text $mb="2.5">Add your details below to get back into the app</Text>

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
            <Message match="valueMissing" asChild>
              <FormMessage>Can't be empty</FormMessage>
            </Message>
            <Message match="typeMismatch" asChild>
              <FormMessage>Invalid email</FormMessage>
            </Message>
          </FormControlCover>
        </FormField>
        <FormField name="password">
          <Label htmlFor="password">Password</Label>
          <FormControlCover>
            <Image src={PasswordIcon} alt="password icon" />
            <FormControl
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
          </FormControlCover>
        </FormField>
        <Submit asChild>
          <Button>Login</Button>
        </Submit>
      </Form>
      <Question>
        <Text $talign="center">Don’t have an account?</Text>
        <Link href="/register">Create account</Link>
      </Question>
    </AuthBox>
  );
}

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
  FormSubmit,
  Label,
} from "@/app/styles/FormStyles";
import EmailIcon from "@/assets/images/icon-email.svg";
import PasswordIcon from "@/assets/images/icon-password.svg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <AuthBox>
      <MainHeading $mb="0.5">Login</MainHeading>
      <Text $mb="2.5">Add your details below to get back into the app</Text>

      <Form $spacing="1.5">
        <FormField name="email">
          <Label>Email address</Label>
          <FormControlCover>
            <Image src={EmailIcon} alt="email icon" />
            <FormControl
              type="email"
              required
              placeholder="e.g. alex@email.com"
            />
          </FormControlCover>
          <FormMessage match="valueMissing">Can't be empty</FormMessage>
          <FormMessage match="typeMismatch">Invalid email</FormMessage>
        </FormField>
        <FormField name="password">
          <Label>Password</Label>
          <FormControlCover>
            <Image src={PasswordIcon} alt="password icon" />
            <FormControl
              type="password"
              required
              placeholder="Enter your password"
            />
          </FormControlCover>
          <FormMessage match="valueMissing">Please check again</FormMessage>
        </FormField>
        <FormSubmit asChild>
          <Button>Login</Button>
        </FormSubmit>
      </Form>
      <Question>
        <Text $talign="center">Don’t have an account?</Text>
        <Link href="/register">Create account</Link>
      </Question>
    </AuthBox>
  );
}

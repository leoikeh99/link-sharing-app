"use client";
import React, { useState } from "react";
import { AuthBox, Divider, Question } from "../styles";
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
import Image from "next/image";
import Link from "next/link";
import { Message, Submit } from "@radix-ui/react-form";
import Loading from "react-loading";
import axios from "axios";
import Alert from "@/app/components/Alert";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SocialLinks } from "@/app/constants";
import { FlexGroup } from "@/app/styles/LayoutStyles";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const githubColor = SocialLinks.find((val) => val.id === "github")?.color;

export default function Register() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | false>(false);
  const session = useSession();
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDetails((val) => {
      return { ...val, [e.target.name]: e.target.value };
    });

  const clearError = () => setError(false);

  const register = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await axios
      .post("/api/auth/register", details, {
        headers: { "Content-Type": "application/json" },
      })
      .then(async (res: any) => {
        const { email, password } = details;
        const value = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        if (value) router.push("/");
      })
      .catch((error) => setError(error.response.data.message));

    setLoading(false);
  };

  return (
    <AuthBox>
      <MainHeading $mb="0.5">Create account</MainHeading>
      <Text $mb="2.5">Let’s get you started sharing your links!</Text>
      <Form $spacing="1.5" onSubmit={register}>
        <Alert
          type="danger"
          message={error ? error : ""}
          isOpen={error}
          close={clearError}
        />
        <FormField name="email">
          <Label htmlFor="email">Email address</Label>
          <FormControlCover>
            <Image
              src="/assets/images/icon-email.svg"
              alt="email icon"
              height={16}
              width={16}
            />
            <FormControl
              type="email"
              name="email"
              value={details.email}
              onChange={onChange}
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
            <Image
              src="/assets/images/icon-password.svg"
              alt="password icon"
              height={16}
              width={16}
            />
            <FormControl
              type="password"
              name="password"
              value={details.password}
              onChange={onChange}
              required
              placeholder="At least 8 characters"
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
            <Message
              match={(value, formData) => value.trim().length < 7}
              asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
          </FormControlCover>
        </FormField>
        <FormField name="confirmPassword">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <FormControlCover>
            <Image
              src="/assets/images/icon-password.svg"
              alt="password icon"
              height={16}
              width={16}
            />
            <FormControl
              type="password"
              name="confirmPassword"
              value={details.confirmPassword}
              onChange={onChange}
              required
              placeholder="At least 8 characters"
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
            <Message
              match={(value, formData) => value.trim().length < 7}
              asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
            <Message
              match={(value, formData) =>
                value.trim().length >= 7 && value != details.password
              }
              asChild>
              <FormMessage>Password mismatch</FormMessage>
            </Message>
          </FormControlCover>

          <Text $size="sm" $mt="1.5">
            Password must contain at least 8 characters
          </Text>
        </FormField>
        <Submit asChild>
          <Button disabled={loading || session.status === "authenticated"}>
            {!loading ? (
              "Create new account"
            ) : (
              <Loading
                type="spin"
                height={23}
                width={23}
                color="var(--clr-neutral-100)"
              />
            )}
          </Button>
        </Submit>
      </Form>
      <Divider>OR</Divider>
      <Button
        $wFull
        style={{ backgroundColor: githubColor }}
        onClick={() => signIn("github")}
        disabled={session.status === "authenticated"}>
        <FlexGroup $gap="1">
          <GitHubLogoIcon height={20} width={20} />
          <span>Continue with Github</span>
        </FlexGroup>
      </Button>
      <Question>
        <Text $talign="center">Already have an account? </Text>
        <Link href="/login">Login</Link>
      </Question>
    </AuthBox>
  );
}

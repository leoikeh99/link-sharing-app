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
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Alert from "@/app/components/Alert";
import Loading from "react-loading";
import { SocialLinks } from "@/app/constants";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FlexGroup } from "@/app/styles/LayoutStyles";

const githubColor = SocialLinks.find((val) => val.id === "github")?.color;

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | false>(false);
  const session = useSession();
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const clearError = () => setError(false);

  const login = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const value = await signIn("credentials", { redirect: false, ...details });
    if (!value) {
      setLoading(false);
      setError("Something went wrong, try again");
      return;
    }
    if (!value.error) router.push("/");
    if (value.error) setError(value.error);
    setLoading(false);
  };

  const btnDisabled =
    loading ||
    session.status === "loading" ||
    session.status === "authenticated";

  return (
    <AuthBox>
      <MainHeading $mb="0.5">Login</MainHeading>
      <Text $mb="2.5">Add your details below to get back into the app</Text>

      <Form $spacing="1.5" onSubmit={login}>
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
              required
              placeholder="e.g. alex@email.com"
              value={details.email}
              onChange={onChange}
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Can&apos;t be empty</FormMessage>
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
              required
              placeholder="Enter your password"
              value={details.password}
              onChange={onChange}
            />
            <Message match="valueMissing" asChild>
              <FormMessage>Please check again</FormMessage>
            </Message>
          </FormControlCover>
        </FormField>
        <Submit asChild>
          <Button disabled={btnDisabled}>
            {!loading ? (
              "Login"
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
        disabled={btnDisabled}>
        <FlexGroup $gap="1">
          <GitHubLogoIcon height={20} width={20} />
          <span>Continue with Github</span>
        </FlexGroup>
      </Button>
      <Question>
        <Text $talign="center">Don’t have an account?</Text>
        <Link href="/register">Create account</Link>
      </Question>
    </AuthBox>
  );
}

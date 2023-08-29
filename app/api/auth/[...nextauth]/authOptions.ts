import clientPromise from "@/lib/mongodb";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "link-share",
    collections: { Users: "users" },
  }),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const client = await clientPromise;
        const db = client.db("link-share");

        const user = await db
          .collection("users")
          .findOne({ email: email.toLowerCase() });
        if (!user) throw new Error("Invalid Credentials");

        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) throw new Error("Invalid Credentials");

        return { ...user, id: user._id.toString() };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

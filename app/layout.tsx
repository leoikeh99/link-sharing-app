import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import { AlertProvider } from "./context/AlertContext";
import NextTopLoader from "nextjs-toploader";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Links",
  description:
    "Welcome to DevLinks Hub, the ultimate platform for developers to effortlessly share and connect through their social links. DevLink Hub is a one-stop destination where tech enthusiasts, programmers, and software engineers can showcase their online presence, network with like-minded professionals, and build valuable connections within the global developer community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrument_sans.className}>
        <NextTopLoader color="var(--clr-primary-400)" />
        <main>
          <StyledComponentsRegistry>
            <AlertProvider>
              <AuthProvider>{children}</AuthProvider>
            </AlertProvider>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}

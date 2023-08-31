import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Auth Next App",
  description: "Auth in my next.js app",
};

export default function LoginLayout(
  { children }: PropsWithChildren // will be a page or nested layout
) {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-primary">
        {children}
      </section>
    </>
  );
}

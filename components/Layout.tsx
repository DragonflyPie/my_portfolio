import Head from "next/head";
import React from "react";
import { Rubik, Montserrat } from "@next/font/google";

const rubik = Rubik({
  variable: "--rubik-font",
  subsets: ["cyrillic", "latin"],
});

const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ["cyrillic", "latin"],
});

export interface LayoutProps extends React.ComponentPropsWithoutRef<"div"> {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="My Portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <main
          className={`${rubik.variable} ${montserrat.variable} flex flex-col overflow-x-hidden scroll-smooth bg-whitish dark:bg-blackish`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

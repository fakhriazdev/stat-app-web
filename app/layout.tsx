import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Provider from "@/app/utils/themes/Provider";
import React from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import store from "@/app/lib/store";
import Providers from "@/app/lib/Provider";


export const metadata: Metadata = {
  title: "Stat app",
  description: "Show your advance",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {

  return (
    <html lang="en"  className={GeistSans.className}>
    <Providers>
      <Provider>
      <body className={`bg-background dark:bg-dark-background`}>
      <Header/>
      <Navbar>
        {children}
      </Navbar>
      </body>
    </Provider>
    </Providers>
    </html>
  );
}

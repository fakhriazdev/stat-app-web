import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Provider from "@/app/utils/themes/Provider";
import React from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
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
      <body className={`bg-background dark:bg-dark-background`}>
        <Providers>
          <Provider>
            <Header/>
              <Navbar>
                {children}
              </Navbar>
        </Provider>
        </Providers>
      </body>
    </html>
  );
}

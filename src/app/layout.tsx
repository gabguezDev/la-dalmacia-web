import type { Metadata } from "next";

import { Lato } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import DefaultLayout from "@/layouts/default-layout/default-layout";
import { Suspense } from "react";

// Font files can be colocated inside of `app`
const mackless_script = localFont({
  src: "../../public/fonts/Mackless-Script.otf",
  display: "block",
  variable: "--font-mackless-script",
  style: "normal",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${lato.variable} ${mackless_script.variable}`}>
        <Suspense>
          <DefaultLayout>{children}</DefaultLayout>
        </Suspense>
      </body>
    </html>
  );
}

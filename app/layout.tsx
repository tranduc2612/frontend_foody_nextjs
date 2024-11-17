import { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./_provider";
import MuiProviders from "./_provider/mui";
import { TanstackProvider } from "./_provider/tanstack";
import "./globals.css";

const europaBold = localFont({
  src: "./fonts/europa-bold-webfont.woff2",
  variable: "--font-europa-bold",
  weight: "100 900",
});
const europaRegular = localFont({
  src: "./fonts/europa-regular-webfont.woff2",
  variable: "--font-europa-regular",
  weight: "100 900",
});
const europaLight = localFont({
  src: "./fonts/europa-light-webfont.woff2",
  variable: "--font-europa-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foody Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${europaBold.variable} ${europaRegular.variable} ${europaLight.variable} antialiased font-europa-regular`}
      >
        <TanstackProvider>
          <AuthProvider>
            <MuiProviders>
              {children}
            </MuiProviders>
          </AuthProvider>
        </TanstackProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

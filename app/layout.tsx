'use client'
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { metadata } from "./metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export interface AuthContext {
  isAuthenticated: boolean
  login: (username: string,password: string) => Promise<void>
  logout: () => Promise<void>
  token: string | null
}

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>Root header</div>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}

"use client";
import { useAuth } from "@/app/_provider";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const {setLogout} = useAuth()

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${{locale}}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <Box component='div' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col rounded-md xl:w-3/12 md:w-5/12 w-10/12">
      {children}
    </Box>
  );
}

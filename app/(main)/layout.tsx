"use client";
import { useAuth } from "@/app/_provider/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLoading } from "../_provider/loading";
import MyLoading from "../_components/loading";
import { Box } from "@mui/material";
import { Sidebar } from "../_components/sidebar";
import Grid from '@mui/material/Grid2';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  
  const {loading} = useLoading();

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${{locale}}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Sidebar />
        </Grid>
        <Grid size={10}>
        {children}
        </Grid>
      </Grid>
      {loading && <MyLoading />}
    </Box>
  );
}

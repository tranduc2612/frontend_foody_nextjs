"use client";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MyLoading from "../_components/loading";
import { Sidebar } from "../_components/sidebar";
import { useLoading } from "../_provider/loading";


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const router = useRouter();
  
  const {loading} = useLoading();

  // function switchLocale(locale: string) {
  //   // e.g. '/en/about' or '/fr/contact'
  //   const newPath = `/${{locale}}`
  //   window.history.replaceState(null, '', newPath)
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className="relative">
        <Grid size={2} className="sticky top-0 h-screen" sx={{boxShadow: '0 0 2em rgba(0, 0, 0, 0.12)', zIndex: 999}}>
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

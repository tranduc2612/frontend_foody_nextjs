"use client";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MyLoading from "../_components/loading";
import { Sidebar } from "../_components/sidebar";
import { useLoading } from "../_provider/loading";
import WapperBanner from "../_components/wapper-banner";
import SearchInput from "../_components/search";
import { useState } from "react";


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const router = useRouter();

  const { loading } = useLoading();
  const [searchValue, setSearchValue] = useState("");

  // function switchLocale(locale: string) {
  //   // e.g. '/en/about' or '/fr/contact'
  //   const newPath = `/${{locale}}`
  //   window.history.replaceState(null, '', newPath)
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className="relative">
        <Grid size={2} className="sticky top-0 h-screen" sx={{ boxShadow: '0 0 2em rgba(0, 0, 0, 0.12)', zIndex: 999 }}>
          <Sidebar />
        </Grid>
        <Grid size={10}>
          <WapperBanner>
            <Container maxWidth="lg" className="">
              <Box
                sx={{
                  width: "40%",
                  margin: "0px auto",
                }}
              >
                <SearchInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onSubmit={() => { }}
                  cx={{}}
                />
              </Box>

              <Box className="flex flex-col text-center m-10 relative z-10">
                <Typography variant="subtitle1">
                  Personalize Your Experience
                </Typography>
                <Typography variant="h3">
                  What are your favorite cuisines ?
                </Typography>
              </Box>
            </Container>
            {children}
          </WapperBanner>
        </Grid>
      </Grid>
      {loading && <MyLoading />}
    </Box>
  );
}

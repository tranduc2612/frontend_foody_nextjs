'use client'
import WapperBanner from "@/app/_components/wapper-banner";
import SearchInput from "@/app/_components/search";
import images from "@/app/assets";
import { Box, Button, Card, CardActions, CardContent, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import CardRecipe from "@/app/_components/card-recipe";

export default function RecipesFeed() {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log('hhh');
  }, [])

  const handleSearch = () => {

  }

  return (
    <WapperBanner>
      <Box>
        <Container maxWidth="lg" className="">
          <Box sx={{
            width: "40%",
            margin: "0px auto"
          }}>
            <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSubmit={handleSearch} cx={{}} />
          </Box>

          <Box className="flex flex-col text-center m-10 relative z-10">
            <Typography variant="subtitle1">Personalize Your Experience</Typography>
            <Typography variant="h3">What are your favorite cuisines?</Typography>
          </Box>
        </Container>

        {/* new feed */}
        <Container>
          <Grid container spacing={2}>
            <Grid size={2.4}>
              <CardRecipe />
            </Grid>

            <Grid size={2.4}>
              <CardRecipe />
            </Grid>

            <Grid size={2.4}>
              <CardRecipe />
            </Grid>

            <Grid size={2.4}>
              <CardRecipe />
            </Grid>

            <Grid size={2.4}>
              <CardRecipe />
            </Grid>

            <Grid size={2.4}>
              <CardRecipe />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </WapperBanner>
  );
}

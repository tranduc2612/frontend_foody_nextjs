'use client'
import CardRecipe from "@/app/_components/card-recipe";
import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function RecipesFeed() {
  return (
    <Box>
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
  );
}

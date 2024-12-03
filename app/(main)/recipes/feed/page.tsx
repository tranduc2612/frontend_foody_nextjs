'use client'
import WapperBanner from "@/app/_components/wapper-banner";
import SearchInput from "@/app/_components/search";
import images from "@/app/assets";
import { Box, Button, Card, CardActions, CardContent, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';

export default function RecipesFeed() {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log('hhh');
  }, [])

  const handleSearch = () => {

  }

  return (
    <Box className="relative">
      <WapperBanner>
        <Box>
          <Container maxWidth="lg">
            <Box sx={{
              width: "40%",
              margin: "20px auto"
            }}>
              <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSubmit={handleSearch} cx={{}} />
            </Box>

            <Box className="flex flex-col text-center m-10">
              <Typography variant="subtitle1">Personalize Your Experience</Typography>
              <Typography variant="h3">What are your favorite cuisines?</Typography>
            </Box>
          </Container>

          {/* new feed */}
          <Container>
            <Grid container spacing={2}>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid size={2}>
                <Paper>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        benevolent
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </WapperBanner>
    </Box>
  );
}

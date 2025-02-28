import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { upperCaseString } from "@/app/_ultis/common";
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";

function CardRecipe({ recipe }: { recipe: Recipes }) {
  return (
    <Card
      className="cursor-pointer"
      sx={{
        maxWidth: 345,
        "&:hover .overlay": {
          top: 50,
        },
        "&:hover .text-overlay": {
          top: 180,
        },
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={recipe.imageTitle}
          alt="Paella dish"
        />
        {/* Lớp phủ gradient */}
        <Box className="overlay absolute top-[200px] left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 transition-all duration-[1200ms] ease z-[1]" />
        {/* <Typography
          variant="body2"
          sx={{ color: "white" }}
          className="text-overlay absolute top-72 px-2 left-0 w-full transition-all duration-[1000ms] ease z-[1] line-clamp-2"
        >
          breakfast, dinner, fastfood, asian
        </Typography> */}
      </Box>
      <CardContent className="relative z-2">
        <Typography
          variant="body2"
          className="h-16 line-clamp-3"
        >
            <span className="inline-block hover:text-main sub-text transition-all duration-[200ms] ease">
                {recipe.description}
            </span>
        </Typography>

        <Typography
          variant="h1"
          className="hover:text-main transition-all duration-[200ms] ease line-clamp-3 font-europa-light text-sm mt-3 h-6"
        >
          {upperCaseString(recipe.title)}
        </Typography>

        <CardActions className="flex w-full justify-center">
          <Rating
            name="simple-controlled"
            value={3.5}
            precision={0.5}
            icon={<FavoriteIcon sx={{ color: "#ff6d75" }} fontSize="inherit" />}
            emptyIcon={
              <FavoriteBorderIcon
                sx={{ color: "#ff6d75" }}
                fontSize="inherit"
              />
            }
            onChange={(event, newValue) => {}}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardRecipe;

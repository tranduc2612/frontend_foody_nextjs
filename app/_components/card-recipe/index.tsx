import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Paper, Typography, Rating } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { upperCaseString } from "@/app/_ultis/common";

function CardRecipe() {


    return <Card className="cursor-pointer" sx={{
        maxWidth: 345,
        '&:hover .overlay': {
            top: 100,
        },
        '&:hover .text-overlay': {
            top: 180,
        }
    }}>
        <Box sx={{
            position: 'relative',
            overflow: 'hidden',
        }}>
            <CardMedia
                component="img"
                height="194"
                image="https://lh3.googleusercontent.com/xcRDZsPMmv9Zdx5x7-jkInac3tTlzpkPc36RFmQpmhbGdNQocR7hLw6oNuJWSgwpLa0CFqXsrLTcI_opBtEr=w220-h220-c-rw-v1-e365"
                alt="Paella dish"
            />
            {/* Lớp phủ gradient */}
            <Box
                className="overlay absolute top-[200px] left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 transition-all duration-[1200ms] ease z-[1]"
            />
            <Typography variant="body2" sx={{ color: 'white' }} className="text-overlay absolute top-72 px-2 left-0 w-full transition-all duration-[1000ms] ease z-[1] line-clamp-2">
                breakfast, dinner, fastfood, asian
            </Typography>
        </Box>
        <CardContent className="relative z-2">

            <Typography
                variant="body2"
                className="hover:text-main sub-text transition-all duration-[200ms] ease line-clamp-3"
            >
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>

            <Typography
                variant="h1"
                className="hover:text-main transition-all duration-[200ms] ease line-clamp-3 font-europa-light text-sm mt-3"
            >
                {upperCaseString("This impressive paella")}
            </Typography>

            <CardActions className="flex w-full justify-center">
                <Rating
                    name="simple-controlled"
                    value={3}
                    onChange={(event, newValue) => {

                    }}
                />
            </CardActions>
        </CardContent>

    </Card>
}

export default CardRecipe
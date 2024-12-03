import images from "@/app/assets";
import { Box } from "@mui/material";
import { Image } from "@unpic/react/nextjs";


function WapperBanner({
    children,
    height = 500
  }: Readonly<{
    children: React.ReactNode,
    height?: number
  }>){
    return <>
        <Image
            layout="fullWidth"
            src={images.banner.primary}
            alt="A lovely bath"
        />
        <Box className="absolute top-0 w-full">
            {children}
        </Box>
    </>
}

export default WapperBanner
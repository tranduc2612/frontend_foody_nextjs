import images from "@/app/assets";
import { Box } from "@mui/material";
import { Image } from "@unpic/react/nextjs";


function WapperBanner({
  children,
  height = 500
}: Readonly<{
  children: React.ReactNode,
  height?: number
}>) {
  return <Box className="relative pt-10">
    <Box className="absolute w-full z-0 top-0">
      <Image
        layout="fullWidth"
        src={images.banner.primary}
        alt="A lovely bath"
      />
    </Box>
    <Box className={`top-0 w-full`}>
      {children}
    </Box>
  </Box>
}

export default WapperBanner
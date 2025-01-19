// components/LoadingComponent.tsx
// import images from "@/app/assets";
import { Box } from "@mui/material";
import Image from 'next/image'

export default function Loading() {
  return (
    <Box sx={{
        alignSelf: 'center'
    }}>
        <Image
            src="/images/loading-spinner-light-bg.gif"
            alt="Picture of the author"
            width={0}
            height={0}
            style={{
              width: '100%',
              height: '100%'
            }}
        />
    </Box>
  );
}
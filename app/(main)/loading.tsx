// components/LoadingComponent.tsx
// import images from "@/app/assets";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  return (
    <Box
      sx={{
        position: "absolute", // Fixed position to cover the whole screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff", // Overlay with 50% opacity black background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/loading-spinner-light-bg.gif"
          alt="Picture of the author"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

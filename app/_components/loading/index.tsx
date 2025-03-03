// components/LoadingComponent.tsx
import { Box, CircularProgress } from "@mui/material";

export default function MyLoading() {
  return (
    <Box
      sx={{
        position: "absolute", // Fixed position to cover the whole screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay with 50% opacity black background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="primary" size={70} />
    </Box>
  );
}

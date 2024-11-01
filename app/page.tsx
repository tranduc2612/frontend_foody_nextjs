'use client'

import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Typography variant="h4">
        Welcome to MUI with Next.js!
      </Typography>
      <Button variant="contained">
        Click Me
      </Button>
    </div>
  );
}

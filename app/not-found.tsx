"use client";
import { Typography } from "@mui/material";
import "./index.css";

export default function NotFound() {
  return (
    <div className="page_notfound">
      <div className="text">
        <Typography
          fontWeight={800}
          variant="h4"
          textAlign="center"
          marginTop={10}
        >
          Oops...! Not Found Page !!!
        </Typography>
      </div>
      {/* <img src={images.icon.sad_empty} alt="" /> */}
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/background/sad_empty.png"
        alt=""
      />
    </div>
  );
}

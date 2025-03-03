import { Box } from "@mui/material";
import Image from "next/image";

function WapperBanner({
  children,
}: Readonly<{
  children: React.ReactNode;
  height?: number;
}>) {
  return (
    <Box className="relative pt-10">
      <Box className="absolute w-full z-0 top-0">
        <Image
          // fill
          src="/images/background/banner_main.jpg"
          alt="A lovely bath"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box className={`top-0 w-full`}>{children}</Box>
    </Box>
  );
}

export default WapperBanner;

import { Box } from "@mui/material";
import Image from 'next/image';


function WapperBox({
  children
}: Readonly<{
  children: React.ReactNode,
}>) {
  return <Box className="relative rounded-lg bg-white p-5" sx={{
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }}>
    <Box className={`w-full`}>
      {children}
    </Box>
  </Box>
}

export default WapperBox
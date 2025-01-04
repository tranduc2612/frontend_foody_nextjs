"use client";
import { Box } from "@mui/material";
import MyLoading from "../_components/loading";
import { useLoading } from "../_provider/loading";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {loading} = useLoading();
  return (
    <>
    <Box component='div' className="border border-main absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col rounded-md xl:w-3/12 md:w-5/12 w-10/12">
      {children}
    </Box>
    {loading && <MyLoading />}
    </>
  );
}

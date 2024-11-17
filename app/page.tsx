'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MyLoading from "./_components/loading";

export default function Page() {
  const router = useRouter();
  useEffect(()=>{
    router.push("/dashboard")
  },[])

  return (
    <MyLoading />
  );
}

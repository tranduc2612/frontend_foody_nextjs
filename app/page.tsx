"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MyLoading from "./_components/loading";
import { ROUTES } from "./_ultis/constant";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.RECIPES_FEED.url);
  }, [router]);

  return <MyLoading />;
}

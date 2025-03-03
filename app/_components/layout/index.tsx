"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/_provider/auth";

export function LayoutPage() {
  const pathname = usePathname();
  const router = useRouter();
  const { setLogout } = useAuth();

  return (
    <nav>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/about"
      >
        About
      </Link>

      <button
        className={`${
          pathname === "/user" ? "active" : ""
        } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}
        onClick={() => {
          setLogout();
          router.push("/login");
        }}
      >
        Log out
      </button>
    </nav>
  );
}

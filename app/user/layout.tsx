"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${{locale}}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <button
          className={`${
            pathname === "/user" ? "active" : ""
          } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}
        >
          <Link href="/">Home</Link>
        </button>

        <button
          className={`${
            pathname === "/user" ? "active" : ""
          } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}

          onClick={()=>{
            router.push('/user/2')
          }}
        >
          User
        </button>

        <button
          className={`${
            pathname === "/user" ? "active" : ""
          } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}

          onClick={()=>{
            
          }}
        >
          Log out
        </button>

        {/* <button
          className={`${
            pathname === "/user" ? "active" : ""
          } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}

          onClick={() => switchLocale('user')}
        >
          User window
        </button>

        <button
          className={`${
            pathname === "/user" ? "active" : ""
          } rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}

          onClick={() => switchLocale('user/2')}
        >
          User window 2
        </button> */}

        
      </nav>
      
      {children}
      <footer>footer 1</footer>
    </div>
  );
}

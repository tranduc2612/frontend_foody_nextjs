'use client'
import { useAuth } from '@/app/_provider';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Authorized({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const authentication = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if(!authentication.isAuthenticated){
          router.push("auth/login")
        }
    },[])
  return (
    <>
        {children}
    </>
  );
}

'use client'
import { useEffect } from "react";

export default function User() {
    useEffect(()=>{
        console.log('hhh');
    },[])
    return (
      <div className="">
          User
      </div>
    );
  }
  
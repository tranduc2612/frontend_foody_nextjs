'use client'

import { useEffect } from "react";

export default async function User({ params }: { params: { id: string } }) {
    useEffect(()=>{
        console.log();
    },[])
    return (
      <div className="">
          User {params.id}
      </div>
    );
  }
  
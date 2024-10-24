"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider";
import React, { useState } from "react";

export default function Login() {
  const [value, setValues] = React.useState<LoginPayload>({
    username: "emilys22",
    password: "emilyspass",
  });
  const { refetch,failureReason ,...data  } = useLogin(value); // Sử dụng refetch để gọi login khi cần

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameField = event.target.getAttribute("name");

    if (typeof nameField !== "string") {
      return;
    }
    setValues({
      ...value,
      [nameField]: event.target.value,
    });
  };

  const handleLogin = async () => {
    const {failureReason} = await refetch()
    console.log(failureReason);
    
  };

  return (
    <form>
      <label htmlFor="">Tài khoản</label>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          name="account"
          value={value.username}
          onChange={handleOnChange}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
        />
      </div>
      <label htmlFor="">Mật khẩu</label>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          name="password"
          value={value.password}
          onChange={handleOnChange}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
        />
      </div>
      <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mx-10`}
          type="button" onClick={handleLogin}
        >
            đăng nhập
        </button>
    </form>
  );
}

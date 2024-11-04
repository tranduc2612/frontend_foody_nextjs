"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider";
import { localStorageService } from "@/app/_ultis/localStorageService";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [value, setValues] = React.useState<LoginPayload>({
    username: "emilys22",
    password: "emilyspass",
  });
  const router = useRouter();
  const { isAuthenticated, setLogin, setLogout } = useAuth();
  const { mutateAsync: login,  isPending } = useLogin();

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
    const res = await login(value);
    if(res.data){
      setLogin(res.data.accessToken,res.data);
      toast.success('dang nhập thành công');
      router.push("/user")
    }else{
      setLogout();
      toast.error('thất bại')
    }
  };

  return (
    <form>
      <label htmlFor="">Tài khoản</label>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          name="username"
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
        <Button type="primary" onClick={handleLogin}>Button</Button>
    </form>
  );
}

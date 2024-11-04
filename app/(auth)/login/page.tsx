"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [value, setValues] = React.useState<LoginPayload>({
    // username: "emilys22",
    // password: "emilyspass",
    username: "",
    password: "",
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
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
          name="username"
          id="username"
          label="Tài khoản"
          type="text"
          value={value.username}
          onChange={handleOnChange}
          placeholder="Nhập tài khoản ở đây..."
          margin="dense"
          fullWidth
        />
      <TextField
          name="password"
          id="password"
          label="Mật khẩu"
          type="password"
          value={value.password}
          onChange={handleOnChange}
          placeholder="Nhập mật khẩu ở đây..."
          margin="dense"
          fullWidth
        />
      <Button variant="contained" onClick={handleLogin}>Đăng nhập</Button>
    </Box>
  );
}

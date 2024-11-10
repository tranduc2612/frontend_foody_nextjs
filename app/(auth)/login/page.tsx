"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import AccessibleIcon from '@mui/icons-material/Accessible';

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

  if(isPending){
   return <></>
  }

  return (
    <>
      <Typography color="primary" variant="h4" align="center" className="mb-10">Log in</Typography>
      <TextField
          name="username"
          id="username"
          label="Username"
          type="text"
          value={value.username}
          onChange={handleOnChange}
          placeholder="Enter your username..."
          margin="dense"
          fullWidth
        />
      <TextField
          name="password"
          id="password"
          label="Password"
          type="password"
          value={value.password}
          onChange={handleOnChange}
          placeholder="Enter your password..."
          margin="dense"
          fullWidth
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={()=>{}} name="remember" />
            }
            label="Remember me"
          />
        </FormGroup>
      <Button className="" variant="contained" onClick={handleLogin}>Log in</Button>
      <Box className="mt-5 w-full">
        <Typography color="textPrimary" variant="h6" textAlign="center">Don't have an acount ?</Typography>
        <Button className="mt-3" variant="outlined" fullWidth><Link href="/register">Sign up</Link></Button>
      </Box>
    </>
  );
}

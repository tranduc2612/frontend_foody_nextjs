"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider";
import { ResponseError } from "@/app/_types/response";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { handleResponseError } from "@/app/_ultis/common";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("The username required !"),
  password: Yup.string()
    .required("The password required !"),
});

export default function Login() {
  const router = useRouter();
  const { isAuthenticated, setLogin, setLogout } = useAuth();
  const { mutateAsync: login, isPending } = useLogin();

  const handleLogin = async (value: LoginPayload, { setErrors }: FormikHelpers<LoginPayload>) => {
    try {
      const res = await login(value);
      console.log(res);
      // setLogin(res.data.accessToken,res.data);
      // router.push("/user")
    } catch (error) {
      const responseError = error as ResponseError;
      const errorInfo = handleResponseError(responseError)
      setErrors(errorInfo)           
    }
  };

  // if (isPending) {
  //   return <></>;
  // }

  return (
    <>
      <Typography color="primary" variant="h4" align="center" className="mb-10">
        Log in
      </Typography>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, values, handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <TextField
              name="username"
              id="username"
              label="Username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur} 
              error={touched.username && !!errors.username}
              helperText={touched.username && errors.username}
              placeholder="Enter your username..."
              margin="dense"
              fullWidth
            />
            <TextField
              name="password"
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              placeholder="Enter your password..."
              margin="dense"
              fullWidth
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={() => {}} name="remember" />}
                label="Remember me"
              />
            </FormGroup>
            <Button className="" variant="contained" type="submit" fullWidth>
              Log in
            </Button>
            <Box className="mt-5 w-full">
              <Typography color="textPrimary" variant="h6" textAlign="center">
                Don't have an acount ?
              </Typography>
              <Button className="mt-3" variant="outlined" fullWidth>
                <Link href="/register">Sign up</Link>
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

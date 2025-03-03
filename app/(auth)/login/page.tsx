"use client";

import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider/auth";
import { ResponseError } from "@/app/_types/response";
import { handleResponseError } from "@/app/_ultis/common";
import { ROUTES } from "@/app/_ultis/constant";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("The username required")
    .min(3, "The username is at least 3 character")
    .max(20, "The username must not exceed 20 characters"),
  password: Yup.string()
    .required("The password is required")
    .min(3, "The password is at least 3 character")
    .max(20, "The password must not exceed 20 characters"),
});

export default function Login() {
  const router = useRouter();
  const { setLogin } = useAuth();
  const { mutateAsync: login } = useLogin();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = async (
    value: LoginPayload,
    { setErrors }: FormikHelpers<LoginPayload>,
  ) => {
    try {
      setLoading(true);
      const res = await login(value);
      if (res) {
        const token = res.data.accessToken;
        const isSuccess = setLogin(token, res.data);
        if (isSuccess) {
          router.push(ROUTES.RECIPES_FEED.url);
        }
      }
    } catch (error) {
      const responseError = error as ResponseError;
      const errorInfo = handleResponseError(responseError);
      setErrors(errorInfo);
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        fontWeight="600"
        color="primary"
        variant="h4"
        align="center"
        className="mb-5"
      >
        <span className="font-europa-bold">Log in</span>
      </Typography>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
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
            <Button
              className=""
              variant="contained"
              type="submit"
              fullWidth
              disabled={loading}
              startIcon={
                loading && <CircularProgress color="inherit" size="20px" />
              }
            >
              Log in
            </Button>
            <Box className="mt-5 w-full">
              <Typography color="textPrimary" variant="h6" textAlign="center">
                Don&apos;t have an acount ?
              </Typography>
              <Button
                className="mt-3"
                variant="outlined"
                fullWidth
                onClick={() => router.push("/register")}
              >
                Sign up
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

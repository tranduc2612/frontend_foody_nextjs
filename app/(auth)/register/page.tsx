"use client";

import { useRegister } from "@/app/_api/auth/hooks";
import { ResponseError } from "@/app/_types/response";
import { formatDayjsToString, handleResponseError } from "@/app/_ultis/common";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
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
  email: Yup.string().email("The email is invalid"),
  DOB: Yup.date()
    .required("The date of birth is required")
    .max(new Date(), "The date of birth cannot be in the future")
    .test("age", "You must be at least 10 years old", value => {
      if (!value) return false;
      const today = new Date();
      const age = today.getFullYear() - value.getFullYear();
      const isOldEnough =
        age > 10 ||
        (age === 10 &&
          today >=
            new Date(
              value.getFullYear() + 10,
              value.getMonth(),
              value.getDate(),
            ));
      return isOldEnough;
    }),
  role: Yup.string(),
});

export default function Register() {
  const router = useRouter();
  // const { isAuthenticated, setLogin, setLogout } = useAuth();
  const { mutateAsync: register } = useRegister();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = async (
    value: RegisterPayload,
    { setErrors }: FormikHelpers<RegisterPayload>,
  ) => {
    try {
      setLoading(true);
      const req = {
        ...value,
        DOB: formatDayjsToString(value.DOB),
      };
      const res = await register(req);
      if (res) {
        router.push("/login");
        toast.success("register success !");
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
        <span className="font-europa-bold">Sign Up</span>
      </Typography>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          DOB: new Date(),
          role: "USER",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleLogin}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          setFieldValue,
          handleBlur,
        }) => (
          <Form>
            <Box className="">
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
            </Box>
            <Box className="">
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
            </Box>
            <Box className="mb-5">
              <TextField
                name="email"
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                placeholder="Enter your email..."
                margin="dense"
                fullWidth
              />
            </Box>

            <Box className="mb-5">
              <DatePicker
                label="Date of Birth"
                name="DOB"
                sx={{ width: "100%" }}
                value={dayjs(values.DOB)}
                onChange={value => {
                  if (value && value.isValid()) {
                    setFieldValue("DOB", value.toDate());
                  } else {
                    setFieldValue("DOB", null);
                  }
                }}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    error: touched.DOB && !!errors.DOB,
                    helperText:
                      touched.DOB && errors.DOB
                        ? String(errors.DOB)
                        : undefined,
                  },
                }}
              />
            </Box>

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
              Sign up
            </Button>
            <Box className="mt-5 w-full">
              <Typography color="textPrimary" variant="h6" textAlign="center">
                You had an acount ?
              </Typography>
              <Button
                className="mt-3"
                variant="outlined"
                fullWidth
                onClick={() => router.push("/login")}
              >
                Log in
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

// app/providers.js
"use client"; // Đặt "use client" ở đầu file này

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../_mui/theme";

export default function MuiProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

import { PaletteOptions } from "@mui/material";

const _palette: PaletteOptions = {
    primary: {
      main: '#1976d2', // Màu chính của primary
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5', // Màu nền của toàn bộ ứng dụng
      paper: '#ffffff',   // Màu nền của các component như Card, Paper
    },
    text: {
      primary: '#333',   // Màu chữ chính
      secondary: '#555', // Màu chữ phụ
    },
}

export default _palette
import { PaletteOptions } from "@mui/material";

const _palette: PaletteOptions = {
    primary: {
      main: '#3a9691', // Màu chính của primary
      light: '#e16120',
      dark: '#4b9b96',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e16120',
      light: '#e16120',
      dark: '#fff',
      contrastText: '#333',
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
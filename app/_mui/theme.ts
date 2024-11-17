// src/theme.js
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createMixins';
import _typography from './_typography';
import _breakpoints from './_breakpoints';
import _palette from './_palette';
import _mixins from './_mixins';
declare module '@mui/material/styles' {
  interface Mixins {
    customMixin: CSSProperties;
  }
}

const theme = createTheme({
  palette: _palette,
  breakpoints: _breakpoints,
  spacing: 8,
  typography: _typography,
  shape: {
    borderRadius: 8, // Tạo border-radius cho các thành phần mặc định là 8px
  },
  mixins: _mixins,
  components:{
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-europa-regular)', // Áp dụng font cho Button
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-europa-regular)', // Áp dụng font cho Typography
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-europa-regular)', // Áp dụng font cho InputBase
        },
      },
    },
  }
  // shadows: [
  //   'none',
  //   '0px 2px 4px rgba(0,0,0,0.2)',
  //   // Tùy chỉnh các shadow ở đây
  // ],
});

export default theme;

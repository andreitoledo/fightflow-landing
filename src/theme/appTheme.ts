import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff3b30',
    },
    secondary: {
      main: '#facc15',
    },
    background: {
      default: '#070707',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b5b5b5',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    button: {
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 18,
  },
});
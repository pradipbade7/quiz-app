import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'var(--primary)',
    },
    secondary: {
      main: 'var(--secondary)',
    },
    background: {
      default: 'var(--background)',
      paper: 'var(--card-background)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
    },
  },
});

export default theme;
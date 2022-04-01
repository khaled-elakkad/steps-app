import { createTheme } from '@mui/material/styles';

import purple from '@mui/material/colors/purple';
import blue from '@mui/material/colors/blue';

export const DefaultTheme = createTheme({
  palette: {
    primary: { dark: '#221266', main: '#673ab7', light: '#f7f2ff' },
    secondary: blue,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          borderWidth: 2,
        },
      },
    },
  },
});

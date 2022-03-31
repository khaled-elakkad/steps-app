import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StepProvider from './providers/StepProvider';
import Layout from './layout';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <StepProvider>
        <Layout />
      </StepProvider>
    </ThemeProvider>
  );
}

export default App;

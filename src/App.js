import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StepProvider from './providers/StepProvider';
import Layout from './layout';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <DndProvider backend={HTML5Backend}>
        <StepProvider>
          <Layout />
        </StepProvider>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;

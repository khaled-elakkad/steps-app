import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StepProvider from './providers/StepProvider';
import { DefaultTheme } from './DefaultTheme';
import Layout from './layout';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <DndProvider backend={HTML5Backend}>
        <StepProvider>
          <Layout />
        </StepProvider>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;

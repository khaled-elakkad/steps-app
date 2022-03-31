import { useContext, useMemo } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddStep from '../components/AddStep';
import EditStep from '../components/EditStep';
import JSONDisplay from '../components/JSONDisplay';
import { drawerWidth, mainPanelModes } from './constants';
import { StepContext } from '../providers/StepProvider';

const MainPanel = () => {
  const { variablesState } = useContext(StepContext);
  const { currentStep, mode } = variablesState;

  return (
    <Box
      component="main"
      sx={{
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      {mode === mainPanelModes.addMode ? (
        <AddStep />
      ) : mode === mainPanelModes.editMode ? (
        <EditStep {...currentStep} />
      ) : (
        <JSONDisplay />
      )}
    </Box>
  );
};

export default MainPanel;

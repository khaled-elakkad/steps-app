import { useContext, useMemo } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddStep from '../components/AddStep';
import EditStep from '../components/EditStep';
import { drawerWidth } from './constants';
import { StepContext } from '../providers/StepProvider';

const MainPanel = () => {
  const { variablesState } = useContext(StepContext);
  const { currentStep } = variablesState;

  const editMode = useMemo(() => !!currentStep.Id, [currentStep]);
  return (
    <Box
      component="main"
      sx={{
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      {editMode ? <EditStep {...currentStep} /> : <AddStep />}
    </Box>
  );
};

export default MainPanel;

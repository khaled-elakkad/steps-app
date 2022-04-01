import { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AddStep from '../../components/AddStep';
import EditStep from '../../components/EditStep';
import JSONDisplay from '../../components/JSONDisplay';
import { mainPanelModes } from '../constants';
import { StepContext } from '../../providers/StepProvider';
import { MainPanelContainer } from './mainPanel.styles';

const MainPanel = () => {
  const { variablesState } = useContext(StepContext);
  const { currentStep, mode } = variablesState;

  return (
    <MainPanelContainer component="main">
      <Toolbar />
      {mode === mainPanelModes.addMode ? (
        <AddStep />
      ) : mode === mainPanelModes.editMode ? (
        <EditStep {...currentStep} />
      ) : (
        <JSONDisplay />
      )}
    </MainPanelContainer>
  );
};

export default MainPanel;

import { useContext, useCallback } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { StepContext } from '../../providers/StepProvider';
import { SET_MODE } from '../../providers/StepProvider/action-types';
import { mainPanelModes } from '../../layout/constants';
import { ButtonsContainer } from './stepsToolbar.styles';

const StepsToolbar = () => {
  const { dispatch } = useContext(StepContext);

  const onClickAdd = useCallback(
    () =>
      dispatch({
        type: SET_MODE,
        payload: { mode: mainPanelModes.addMode },
      }),
    []
  );

  const onClickDebug = useCallback(
    () =>
      dispatch({
        type: SET_MODE,
        payload: { mode: mainPanelModes.jsonMode },
      }),
    []
  );

  return (
    <Toolbar>
      <ButtonsContainer>
        <Button variant="outlined" onClick={onClickAdd}>
          ADD A STEP
        </Button>
        <Button variant="contained" onClick={onClickDebug}>
          DEBUG
        </Button>
      </ButtonsContainer>
    </Toolbar>
  );
};

export default StepsToolbar;

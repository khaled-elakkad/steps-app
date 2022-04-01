import { memo, useContext, useCallback, useMemo } from 'react';
import DragIcon from '@mui/icons-material/DragIndicatorOutlined';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { useDrag, useDrop } from 'react-dnd';
import { StepContext } from '../../providers/StepProvider';
import {
  REORDER_STEP,
  SELECT_STEP,
} from '../../providers/StepProvider/action-types';
import { ItemTypes } from '../../ItemTypes';
import { StepContainer, StepDetails, useStyles } from './step.style';

function Step({ Id, Name, StepOrder }) {
  const { variablesState, dispatch } = useContext(StepContext);
  const { currentStep } = variablesState;

  const classes = useStyles();

  const onClickSelect = useCallback(
    () => dispatch({ type: SELECT_STEP, payload: { Id, Name, StepOrder } }),
    []
  );

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { Id, StepOrder },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [Id, StepOrder, dispatch]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ Id: draggedId, StepOrder: draggedStepOrder }) {
        if (draggedId !== Id) {
          dispatch({
            type: REORDER_STEP,
            payload: { StepOrder, draggedStepOrder },
          });
        }
      },
    }),
    [StepOrder, dispatch]
  );

  const opacity = useMemo(() => (isDragging ? 0 : 1), [isDragging]);

  const isSelectedStep = useMemo(() => currentStep.Id === Id, [currentStep]);

  return (
    <StepContainer
      ref={(node) => drag(drop(node))}
      sx={{ opacity }}
      onClick={onClickSelect}
    >
      <DragIcon />
      <StepDetails
        elevation={0}
        variant="outlined"
        className={isSelectedStep && classes.selected}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          {Name}
        </Typography>
        <Radio
          checked={isSelectedStep}
          value={Id}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </StepDetails>
    </StepContainer>
  );
}

export default memo(Step);

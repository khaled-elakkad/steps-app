import { memo, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DragIcon from '@mui/icons-material/DragIndicatorOutlined';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import { useDrag, useDrop } from 'react-dnd';
import { StepContext } from '../../providers/StepProvider';
import {
  REORDER_STEP,
  SELECT_STEP,
} from '../../providers/StepProvider/action-types';
import { ItemTypes } from '../../ItemTypes';

const style = {
  border: '1px solid gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

function Step({ Id, Name, StepOrder }) {
  const { variablesState, dispatch } = useContext(StepContext);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { Id, StepOrder },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { Id: droppedId, StepOrder: droppedStepOrder } = item;
        const didDrop = monitor.didDrop();
      },
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

  const opacity = isDragging ? 0 : 1;
  return (
    <ListItem
      button
      ref={(node) => drag(drop(node))}
      style={{ ...style, opacity }}
      onClick={() =>
        dispatch({ type: SELECT_STEP, payload: { Id, Name, StepOrder } })
      }
    >
      <ListItemIcon>
        <DragIcon />
      </ListItemIcon>
      <ListItemText primary={Name} />
      <Radio
        checked={variablesState.currentStep.Id === Id}
        value={Id}
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
    </ListItem>
  );
}

export default memo(Step);

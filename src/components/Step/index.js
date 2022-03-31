import { memo, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DragIcon from '@mui/icons-material/DragIndicatorOutlined';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import { useDrag, useDrop } from 'react-dnd';
import { StepContext } from '../../providers/StepProvider';
import { SELECT_STEP } from '../../providers/StepProvider/action-types';
import { ItemTypes } from '../../ItemTypes';

const style = {
  border: '1px solid gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

function Step({ Id, Name, StepOrder, moveCard, findCard }) {
  const { variablesState, dispatch } = useContext(StepContext);
  const originalIndex = findCard(Id).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { Id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { Id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [Id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ Id: draggedId }) {
        if (draggedId !== Id) {
          const { index: overIndex } = findCard(Id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
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

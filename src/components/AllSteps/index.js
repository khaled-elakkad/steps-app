import { memo, useContext } from 'react';
import { useDrop } from 'react-dnd';
import List from '@mui/material/List';
import Step from '../Step';
import { ItemTypes } from '../../ItemTypes';
import { StepContext } from '../../providers/StepProvider';

const AllSteps = memo(function () {
  const { variablesState } = useContext(StepContext);

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));

  return (
    <List ref={drop}>
      {variablesState.steps.map((step) => (
        <Step
          key={step.Id}
          Id={`${step.Id}`}
          Name={step.Name}
          StepOrder={step.StepOrder}
        />
      ))}
    </List>
  );
});

export default AllSteps;

import { memo, useContext } from 'react';
import { useDrop } from 'react-dnd';
import Step from '../Step';
import { ItemTypes } from '../../ItemTypes';
import { StepContext } from '../../providers/StepProvider';
import { AllStepsContainer } from './allSteps.style';

const AllSteps = memo(function () {
  const { variablesState } = useContext(StepContext);

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));

  return (
    <AllStepsContainer ref={drop}>
      {variablesState.steps.map((step) => (
        <Step
          key={step.Id}
          Id={`${step.Id}`}
          Name={step.Name}
          StepOrder={step.StepOrder}
        />
      ))}
    </AllStepsContainer>
  );
});

export default AllSteps;

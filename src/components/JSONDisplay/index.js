import { useContext } from 'react';
import { StepContext } from '../../providers/StepProvider';

const JSONDisplay = () => {
  const { variablesState } = useContext(StepContext);

  return (
    <div>
      <pre>{JSON.stringify(variablesState.steps, null, 2)}</pre>
    </div>
  );
};

export default JSONDisplay;

import { useState, useContext, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextInput from '../TextInput';
import { StepContext } from '../../providers/StepProvider';
import { ADD_STEP } from '../../providers/StepProvider/action-types';
import { FormContainer, LeftSide, RightSide } from '../common';

const AddStep = () => {
  const { dispatch } = useContext(StepContext);

  const [name, setName] = useState('');

  const handleChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onAddClick = useCallback(() => {
    dispatch({ type: ADD_STEP, payload: name });
    setName('');
  }, [name]);

  const onResetClick = useCallback(() => setName(''), []);

  const isValid = name.length;

  return (
    <FormContainer>
      <LeftSide>
        <TextInput label="Step name" name={name} handleChange={handleChange} />
      </LeftSide>
      <RightSide>
        <Button
          variant="contained"
          color="error"
          disabled={!isValid}
          onClick={onResetClick}
        >
          Reset
        </Button>
        <Button variant="outlined" disabled={!isValid} onClick={onAddClick}>
          Add Step
        </Button>
      </RightSide>
    </FormContainer>
  );
};

export default AddStep;

import { useState, useContext, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
        <div style={{ display: 'flex' }}>
          <Typography>Step name</Typography>
          <TextField
            sx={{
              '&.Mui-focused': {
                borderBottomColor: 'green',
              },
            }}
            id="step-name"
            // label="Step name"
            variant="filled"
            size="small"
            value={name}
            onChange={handleChange}
          />
        </div>
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

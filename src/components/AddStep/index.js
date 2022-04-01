import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ActionButton from '../custom/ActionButton';
import { StepContext } from '../../providers/StepProvider';
import { ADD_STEP } from '../../providers/StepProvider/action-types';

import Input from '@mui/material/Input';

const AddStep = () => {
  const { dispatch } = useContext(StepContext);
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const isValid = name.length;
  return (
    <Box>
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

      <ActionButton
        variant="outlined"
        disabled={!isValid}
        onClick={() => {
          dispatch({ type: ADD_STEP, payload: name });
          setName('');
        }}
      >
        Add Step
      </ActionButton>
      <ActionButton
        variant="contained"
        color="error"
        onClick={() => setName('')}
      >
        Reset
      </ActionButton>
    </Box>
  );
};

export default AddStep;

import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StepContext } from '../../providers/StepProvider';
import { ADD_STEP } from '../../providers/StepProvider/action-types';

const AddStep = () => {
  const { dispatch } = useContext(StepContext);
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="step-name"
        label="Step name"
        variant="filled"
        value={name}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: ADD_STEP, payload: name });
          setName('');
        }}
      >
        Add Step
      </Button>
      <Button variant="outlined" color="error" onClick={() => setName('')}>
        Reset
      </Button>
    </Box>
  );
};

export default AddStep;

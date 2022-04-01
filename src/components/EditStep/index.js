import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ActionButton from '../custom/ActionButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { StepContext } from '../../providers/StepProvider';
import {
  EDIT_STEP,
  REMOVE_STEP,
} from '../../providers/StepProvider/action-types';

const EditStep = ({ Id, Name, StepOrder }) => {
  const { dispatch } = useContext(StepContext);
  const [stepName, setStepName] = useState(Name);

  useEffect(() => {
    setStepName(Name);
  }, [Name]);

  const handleChange = (event) => {
    setStepName(event.target.value);
  };

  const isValid = stepName.length;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={() => {}}
    >
      <TextField
        id="step-name"
        label="Step name"
        variant="filled"
        value={stepName}
        onChange={handleChange}
      />
      <ActionButton
        variant="outlined"
        disabled={!isValid}
        onClick={() =>
          dispatch({
            type: EDIT_STEP,
            payload: { Id, Name: stepName, StepOrder },
          })
        }
      >
        Edit
      </ActionButton>
      <ActionButton
        color="error"
        onClick={() =>
          dispatch({
            type: REMOVE_STEP,
            payload: { Id, Name: stepName, StepOrder },
          })
        }
      >
        <DeleteIcon />
        Delete Step
      </ActionButton>
    </Box>
  );
};

export default EditStep;

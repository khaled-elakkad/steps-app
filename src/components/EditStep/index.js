import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextInput from '../TextInput';
import { StepContext } from '../../providers/StepProvider';
import {
  EDIT_STEP,
  REMOVE_STEP,
} from '../../providers/StepProvider/action-types';
import { FormContainer, LeftSide, RightSide } from '../common';
import { DeleteButton } from './editStep.styles';

const EditStep = ({ Id, Name, StepOrder }) => {
  const { dispatch } = useContext(StepContext);

  const [stepName, setStepName] = useState(Name);

  useEffect(() => {
    setStepName(Name);
  }, [Name]);

  const handleChange = useCallback((event) => {
    setStepName(event.target.value);
  }, []);

  const isValid = useMemo(() => stepName.length, [stepName]);

  const onDeleteClick = useCallback(
    () =>
      dispatch({
        type: REMOVE_STEP,
        payload: { Id, Name: stepName, StepOrder },
      }),
    [stepName, StepOrder, Id]
  );

  const onEditClick = useCallback(
    () =>
      dispatch({
        type: EDIT_STEP,
        payload: { Id, Name: stepName, StepOrder },
      }),
    [stepName, Id, StepOrder]
  );

  return (
    <FormContainer>
      <LeftSide>
        <TextInput
          label="Step name"
          name={stepName}
          handleChange={handleChange}
        />
      </LeftSide>
      <RightSide>
        <DeleteButton color="error" onClick={onDeleteClick}>
          <DeleteIcon />
          Delete Step
        </DeleteButton>
        <Button variant="outlined" disabled={!isValid} onClick={onEditClick}>
          Edit
        </Button>
      </RightSide>
    </FormContainer>
  );
};

export default EditStep;

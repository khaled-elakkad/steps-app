import * as actions from './action-types';
import { v4 as uuidv4 } from 'uuid';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SELECT_STEP:
      return {
        ...state,
        currentStep: payload,
      };

    case actions.CLEAR_SELECTED_STEP:
      return {
        ...state,
        currentStep: {},
      };

    case actions.ADD_STEP:
      const stepsAfterAdd = [
        ...state.steps,
        { Id: uuidv4(), Name: payload, StepOrder: state.steps.length },
      ];
      return {
        currentStep: {},
        steps: stepsAfterAdd,
      };

    case actions.EDIT_STEP:
      const stepsAfterEdit = [
        ...state.steps.slice(0, payload.StepOrder),
        payload,
        ...state.steps.slice(payload.StepOrder + 1),
      ];
      return {
        ...state,
        steps: stepsAfterEdit,
      };

    case actions.REMOVE_STEP:
      const stepsWithUpdatedIndex = state.steps
        .slice(payload.StepOrder + 1)
        .map((step) => ({ ...step, StepOrder: step.StepOrder - 1 }));
      const stepsAfterRemove = [
        ...state.steps.slice(0, payload.StepOrder),
        ...stepsWithUpdatedIndex,
      ];
      return {
        currentStep: {},
        steps: stepsAfterRemove,
      };

    case actions.REORDER_STEP:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;

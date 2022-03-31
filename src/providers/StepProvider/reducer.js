import { v4 as uuidv4 } from 'uuid';
import * as actions from './action-types';
import { mainPanelModes } from '../../layout/constants';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SELECT_STEP:
      return {
        ...state,
        currentStep: payload,
        mode: mainPanelModes.editMode,
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
        ...state,
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
        ...state,
        mode: mainPanelModes.addMode,
        currentStep: {},
        steps: stepsAfterRemove,
      };

    case actions.REORDER_STEP:
      const { StepOrder, draggedStepOrder } = payload;
      let stepsClone = [...state.steps];
      // remove dragged element from old place
      stepsClone.splice(draggedStepOrder, 1);
      // add dragged element to new place
      stepsClone.splice(StepOrder, 0, state.steps[draggedStepOrder]);
      // update step order
      stepsClone = stepsClone.map((step, idx) => ({ ...step, StepOrder: idx }));

      return {
        ...state,
        steps: stepsClone,
      };

    case actions.SET_MODE:
      return {
        ...state,
        mode: payload.mode,
        currentStep: {},
      };

    default:
      return state;
  }
};

export default reducer;

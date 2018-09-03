import * as UpdateMultiStepActions from './multi-step.action';

const initialState = null;

export function multiStepReducer(state: any = initialState, action: UpdateMultiStepActions.Actions) {
  switch (action.type) {
    case UpdateMultiStepActions.ADD_UPDATE_STEP:
      return action.payload;

    case UpdateMultiStepActions.REMOVE_UPDATE_STEP:
      return initialState;

    default:
      return state;
  }
}

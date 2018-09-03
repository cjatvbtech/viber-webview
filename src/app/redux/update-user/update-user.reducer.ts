import * as UpdateUserActions from './update-user.action';
const initialState: any = null;

export function updateUserReducer(state: any = initialState, action: UpdateUserActions.Actions) {
  console.log(action.type)
  switch (action.type) {
    case UpdateUserActions.ADD_UPDATE_USER:
      return action.payload;

    case UpdateUserActions.REMOVE_UPDATE_USER:
      return initialState;

    default:
      return state;
  }
}

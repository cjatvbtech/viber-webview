import * as LoggedUserActions from './user.action';

const initialState: any = null;

export function reducer(state: any = initialState, action: LoggedUserActions.Actions) {
  switch (action.type) {
    case LoggedUserActions.ADD_LOGGED_USER:
      return action.payload;

    case LoggedUserActions.REMOVE_LOGGED_USER:
      return initialState;

    default:
      return state;
  }
}

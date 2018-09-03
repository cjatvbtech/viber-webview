import {Action} from '@ngrx/store';

export const ADD_LOGGED_USER = '[LOGGED_USER] ADD';
export const REMOVE_LOGGED_USER = '[LOGGED_USER] REMOVE';


export class AddLoggedUser implements Action {
  readonly type = ADD_LOGGED_USER;
  
  constructor(public payload: any) {}
}

export class RemoveLoggedUser implements Action {
  readonly type = REMOVE_LOGGED_USER;

  constructor() {}
}

export type Actions = AddLoggedUser | RemoveLoggedUser;

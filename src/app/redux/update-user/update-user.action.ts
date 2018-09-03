import {Action} from '@ngrx/store';

export const ADD_UPDATE_USER = '[UPDATE_USER] ADD';
export const REMOVE_UPDATE_USER = '[UPDATE_USER] REMOVE';


export class AddUpdateUser implements Action {
  readonly type = ADD_UPDATE_USER;

  constructor(public payload: any) {}
}

export class RemoveUpdateUser implements Action {
  readonly type = REMOVE_UPDATE_USER;

  constructor() {}
}

export type Actions = AddUpdateUser | RemoveUpdateUser;

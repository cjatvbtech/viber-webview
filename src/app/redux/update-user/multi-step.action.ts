import {Action} from '@ngrx/store';

export const ADD_UPDATE_STEP = '[UPDATE_STEP] ADD';
export const REMOVE_UPDATE_STEP = '[UPDATE_STEP] REMOVE';


export class AddUpdateStep implements Action {
  readonly type = ADD_UPDATE_STEP;

  constructor(public payload: any) {}
}

export class RemoveUpdateStep implements Action {
  readonly type = REMOVE_UPDATE_STEP;

  constructor() {}
}

export type Actions = AddUpdateStep | RemoveUpdateStep;

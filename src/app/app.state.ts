import { UserAccount } from './model/index';

export interface AppState {
  readonly loggedUser: UserAccount;
  readonly updateUser: UserAccount;
}

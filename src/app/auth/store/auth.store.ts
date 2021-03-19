import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {Credentials, User} from '../../shared/model/user';

export interface AuthState {
  data?: User;
  credentials?: Credentials
}

export function createInitialState(): AuthState {
  return {};
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'auth', resettable: true})
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}

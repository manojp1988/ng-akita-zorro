import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {User} from '../../shared/model/user';

export interface AuthState {
  data?: User;
}

export function createInitialState(): AuthState {
  return {
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}

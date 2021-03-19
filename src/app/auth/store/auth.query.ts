import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {AuthState, AuthStore} from './auth.store';
import {User} from '../../shared/model/user';

@Injectable({providedIn: 'root'})
export class AuthQuery extends Query<AuthState> {

  isLoggedIn$ = this.select(state => !!state.credentials?.token);

  constructor(protected store: AuthStore) {
    super(store);
  }

  get isLoggedIn(): boolean {
    return !!this.getValue().credentials?.token;
  }

  get token(): string {
    return this.getValue().credentials?.token;
  }

  getUsername(): string {
    return this.getValue().credentials?.username;
  }

  getUserData(): User {
    return this.getValue().data;
  }
}

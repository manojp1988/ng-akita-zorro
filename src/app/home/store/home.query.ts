import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {HomeState, HomeStore} from './home.store';

@Injectable({providedIn: 'root'})
export class HomeQuery extends Query<HomeState> {

  id$ = this.select('id');

  constructor(protected store: HomeStore) {
    super(store);
  }

}

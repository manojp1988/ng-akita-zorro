import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface HomeState {
   id: number
}

export function createInitialState(): HomeState {
  return {
    id: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'home' })
export class HomeStore extends Store<HomeState> {

  constructor() {
    super(createInitialState());
  }

}

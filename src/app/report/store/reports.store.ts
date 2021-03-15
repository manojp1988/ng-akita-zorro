import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface ReportsState {
  id: number
}

export function createInitialState(): ReportsState {
  return {
    id: 0
  };
}

@Injectable()
@StoreConfig({ name: 'reports' })
export class ReportsStore extends Store<ReportsState> {

  constructor() {
    super(createInitialState());
  }


}

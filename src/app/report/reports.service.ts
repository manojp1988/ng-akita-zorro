import {Injectable} from '@angular/core';
import {ReportsStore} from './store/reports.store';

@Injectable()
export class ReportsService {

  constructor(private store: ReportsStore) { }

  increment() {
    this.store.update(state => (
      {id: (state.id + 1)}
    ))

  }

}

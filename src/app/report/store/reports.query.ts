import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {ReportsState, ReportsStore} from './reports.store';

@Injectable()
export class ReportsQuery extends Query<ReportsState> {

  id$ = this.select('id');

  constructor(protected store: ReportsStore) {
    super(store);
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './container/reports/reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsService} from './reports.service';
import {ReportsStore} from './store/reports.store';
import {ReportsQuery} from './store/reports.query';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  providers: [
    ReportsService,
    ReportsStore,
    ReportsQuery
  ]
})
export class ReportsModule { }

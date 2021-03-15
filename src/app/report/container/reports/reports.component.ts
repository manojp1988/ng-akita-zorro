import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../../reports.service';
import {ReportsQuery} from '../../store/reports.query';

@Component({
  selector: 'ff-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
 id$ = this.query.id$;

  number = 0;

  constructor(private service: ReportsService,
              private query: ReportsQuery) { }

  ngOnInit(): void {
  }

  increment() {
    this.number += 1;
    this.service.increment();
  }

}

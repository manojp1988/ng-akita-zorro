import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {HomeQuery} from './store/home.query';

@Component({
  selector: 'ff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id$ = this.query.id$;

  number = 0;

  constructor(private service: HomeService,
              private query: HomeQuery) { }

  ngOnInit(): void {
    this.service.getMoviesList();
  }

  increment() {
    this.number += 1;
    this.service.increment();
  }
}

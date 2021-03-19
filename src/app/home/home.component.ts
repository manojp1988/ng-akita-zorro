import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {MovieQuery} from './store/movie.query';

@Component({
  selector: 'ff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data$ = this.query.selectAll();

  number = 0;

  constructor(private service: HomeService,
              private query: MovieQuery) {
  }

  ngOnInit(): void {
    this.service.getMoviesList().subscribe({
      error: err => {
        console.error(err);
      }
    });
  }

}

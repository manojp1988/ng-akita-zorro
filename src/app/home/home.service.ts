import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../shared/util/constant';
import {MovieStore} from './store/movie.store';
import {tap} from 'rxjs/operators';
import {Movie} from './store/movie';
import {applyTransaction, cacheable} from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private store: MovieStore) {
  }

  getMoviesList() {
    this.store.setLoading(true);
    const request$ = this.http.get<Movie[]>(`${API}/movies`).pipe(
      tap(movies => {
        applyTransaction(() => {
          this.store.setLoading(false);
          this.store.set(movies);
        });
      })
    );
    return cacheable(this.store, request$);
  }

}

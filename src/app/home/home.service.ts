import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../shared/util/constant';
import {HomeStore} from './store/home.store';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private store: HomeStore) { }

  async getMoviesList() {
   const moviesList = await this.http.get(`${API}/movies`).toPromise();
   console.log(moviesList);
  }

  increment() {
    this.store.update(state => (
      {id: (state.id + 1)}
    ))
  }
}

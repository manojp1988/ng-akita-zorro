import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../shared/util/constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  async getMoviesList() {
   const moviesList = await this.http.get(`${API}/movies`).toPromise();
   console.log(moviesList);
  }
}

import {Injectable} from '@angular/core';
import {AuthStore} from './store/auth.store';
import {applyTransaction} from '@datorama/akita';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/model/user';
import {API} from '../shared/util/constant';
import {Response} from '../shared/model/response';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authStore: AuthStore,
              private http: HttpClient) {
  }

  // @transaction()
  login({username, password}): Promise<Response> {

    this.authStore.update({credentials: {username}});
    this.authStore.setLoading(true);

    return applyTransaction(async () => {
      try {
        const response: User = await this.http.post<User>(`${API}/security/login`, {username, password}).toPromise();
        this.authStore.update({
          data: {...response},
          credentials: {
            token: response.token,
            username: response.email
          }
        });
        this.authStore.setLoading(false);

        return {error: !response.token};
      } catch (e) {
        this.authStore.setLoading(false);
        return {error: true, message: e.error.detailMessage};
      }
    });
  }

  forgotPassword({username}): Promise<boolean> {
    this.authStore.setLoading(true);
    return applyTransaction(async () => {
      const response: boolean = await this.http.get<boolean>(`${API}/security/forgotPassword/${username}`).toPromise();
      this.authStore.reset();
      localStorage.removeItem('Authorization');
      this.authStore.setLoading(false);
      return response;
    });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authStore.reset();
      localStorage.removeItem('Authorization');
      resolve(true);
    });
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${API}/users/${username}`).pipe(
      tap(user => {
        this.authStore.update({data: user});
      })
    );
  }
}

import {Injectable} from '@angular/core';
import {AuthStore} from './store/auth.store';
import {applyTransaction, transaction} from '@datorama/akita';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/model/user';
import {API} from '../shared/util/constant';
import {Response} from '../shared/model/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authStore: AuthStore,
              private http: HttpClient) {
  }

  // @transaction()
  login({username, password}): Promise<Response> {
    this.authStore.setLoading(true);
    return applyTransaction(async () => {
      try {
        const response: User = await this.http.post<User>(`${API}/security/login`, {username, password}).toPromise();
        this.authStore.update({
          data: {...response}
        });
        this.authStore.setLoading(false);

        return { error: !response.token } ;
      } catch (e) {
        this.authStore.setLoading(false);
        console.error(e);
        return { error: true, message: e.error.detailMessage } ;
      }
    });
  }

  forgotPassword({username}): Promise<boolean> {
    this.authStore.setLoading(true);
    return applyTransaction(async () => {
      const response: boolean = await this.http.get<boolean>(`${API}/security/forgotPassword/${username}`).toPromise();
      this.authStore.update(state => ({
        data: {
          ...state.data,
          token: null
        }
      }));

      this.authStore.setLoading(false);
      return response;
    });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authStore.update(state => ({
        data: {
          ...state.data,
          token: null
        }
      }));
      resolve(true);
    });
  }

}

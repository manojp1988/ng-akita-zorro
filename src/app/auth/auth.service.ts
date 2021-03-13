import {Injectable} from '@angular/core';
import {AuthStore} from './store/auth.store';
import {applyTransaction, transaction} from '@datorama/akita';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/model/user';
import {API} from '../shared/util/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authStore: AuthStore,
              private http: HttpClient) {
  }

  // @transaction()
  login({username, password}): Promise<boolean> {
    this.authStore.setLoading(true);
    return applyTransaction(async () => {
      const response: User = await this.http.post<User>(`${API}/security/login`, {username, password}).toPromise();
      this.authStore.update({
        data: {...response}
      });

      this.authStore.setLoading(false);
      return !!response.token;
    });
  }

}

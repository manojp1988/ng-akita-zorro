import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthQuery} from '../../auth/store/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private query: AuthQuery) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = {
      'Cache-control': 'no-cache',
    };

    if (!!this.query.token) {
      headers['Authorization'] = 'Bearer ' + this.query.token;
    }

    const authReq = req.clone({
      setHeaders: headers
    });

    return next.handle(authReq);
  }
}

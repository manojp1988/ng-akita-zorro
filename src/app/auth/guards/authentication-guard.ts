import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of as observableOf} from 'rxjs';
import {AuthQuery} from '../store/auth.query';
import {AuthService} from '../auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private service: AuthService,
              private query: AuthQuery) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    if (this.query.isLoggedIn) {
      if(!!this.query.getUserData()) return observableOf(true);
      else{
        return this.service.getUser(this.query.getUsername()).pipe(
          map(e => !!e)
        );
      }
    } else {
      this.router.navigate(['login']);
    }

  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of as observableOf} from 'rxjs';
import {AuthQuery} from '../store/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{

  constructor(private router: Router,
              private query: AuthQuery) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    if(this.query.isLoggedIn){
      return observableOf(true);
    } else {
       this.router.navigate(['login']);
    }

  }
}

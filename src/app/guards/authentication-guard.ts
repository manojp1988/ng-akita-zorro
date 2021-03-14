import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of as observableOf} from 'rxjs';
import {AuthQuery} from '../auth/store/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{

  constructor(private router: Router,
              private query: AuthQuery) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let hasCredentials = false;

    if(this.query.isLoggedIn){
      return observableOf(true);
    } else {
       this.router.navigate(['login']);
    }

  }
}

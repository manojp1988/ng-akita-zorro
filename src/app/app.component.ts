import {Component, OnInit} from '@angular/core';
import {AuthQuery} from './auth/store/auth.query';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$ = this.query.isLoggedIn$;

  constructor(private query: AuthQuery,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().then(e => {
      if (!this.query.isLoggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }
}

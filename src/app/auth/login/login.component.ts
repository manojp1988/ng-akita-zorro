import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthQuery} from '../store/auth.query';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'ff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.authQuery.isLoggedIn$;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authQuery: AuthQuery,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.login(this.validateForm.value)
      .then(e => {
        if (e) {
          this.router.navigate(['user']);
        }
      });

  }

}

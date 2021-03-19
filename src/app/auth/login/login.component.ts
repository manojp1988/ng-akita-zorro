import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthQuery} from '../store/auth.query';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  error: string;

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
      .then((e) => {
        if (e.error) {
          if (e.message === 'Password is expired') {
            this.router.navigateByUrl('/reset-password', {state: {message: e.message}});
          }
          this.error = e.message;
        } else {
          this.router.navigate(['/']);
        }
      });

  }

}

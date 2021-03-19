import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthQuery} from '../store/auth.query';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ff-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authQuery: AuthQuery,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.forgotPassword(this.validateForm.value)
      .then(e => {
        if (e) {
          this.router.navigate(['/']);
        }
      });

  }
}

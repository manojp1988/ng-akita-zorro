import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from './ng-zorro-antd.module';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import {LoginComponent} from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {UserComponent} from './user/user.component';
import {NgProgressModule} from 'ngx-progressbar';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import {HomeComponent} from './home/home.component';
import {AuthInterceptorService} from './shared/services/auth-interceptor.service';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    NgProgressModule,
    NgProgressHttpModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

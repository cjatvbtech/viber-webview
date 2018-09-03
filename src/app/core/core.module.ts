import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Services} from './services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {AuthGuard} from './guard/auth.guard';
import {AllowAllGuard} from "./guard/allow-all.guard";
import {LoginGuard} from "./guard/login.guard";


@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
  ],
  providers: [
    ...Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthGuard,
    AllowAllGuard,
    LoginGuard
  ],
  exports: [
    HttpClientModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }

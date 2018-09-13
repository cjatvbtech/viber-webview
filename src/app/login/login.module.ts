import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { routing } from './login.routing';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';
import { NominatePinComponent } from './nominate-pin/nominate-pin.component';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    SharedModule,
    NgxMaskModule.forRoot(),
    routing
  ],
  declarations: [
    LoginComponent,
    ValidateOtpComponent,
    NominatePinComponent
  ]
})
export class LoginModule { }

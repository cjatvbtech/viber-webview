import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';
import { NominatePinComponent } from './nominate-pin/nominate-pin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'validate-otp', component: ValidateOtpComponent },
  { path: 'nominate-pin', component: NominatePinComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

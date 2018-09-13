import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BaseComponent } from './layout/base/base.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from "./layout/error-page/error-page.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'enrollment', loadChildren: './login/login.module#LoginModule' },
  { path: 'terms-and-conditions', loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule' },
  { path: 'balance-inquiry', loadChildren: './balance-inquiry/balance-inquiry.module#BalanceInquiryModule' },
  { path: '**', redirectTo: 'not-found'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

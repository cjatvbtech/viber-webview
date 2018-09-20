import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SelectAccountComponent } from './select-account/select-account.component';
import { AccountComponent } from './account/account.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

export const routes: Routes = [
  { path: '', component: SelectAccountComponent, data: { state: 'select-account'} },
  { path: 'account/:id', component: AccountComponent, data: { state: 'account'} },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent, data: { state: 'transaction-detail'} }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

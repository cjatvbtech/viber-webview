import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SelectAccountComponent } from './select-account/select-account.component';
import { AccountComponent } from './account/account.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

export const routes: Routes = [
  { path: '', component: SelectAccountComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

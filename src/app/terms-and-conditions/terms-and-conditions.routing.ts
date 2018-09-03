import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

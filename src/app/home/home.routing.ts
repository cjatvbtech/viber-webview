import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

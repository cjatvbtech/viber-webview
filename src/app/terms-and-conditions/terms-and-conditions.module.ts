import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { routing } from './terms-and-conditions.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [IndexComponent]
})
export class TermsAndConditionsModule { }

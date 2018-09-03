import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {routing} from './home.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

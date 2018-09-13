import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { routing } from './app.routing';
import { BaseComponent } from './layout/base/base.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TogglePasswordMaskComponent } from './layout/toggle-password-mask/toggle-password-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing,
    NgHttpLoaderModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

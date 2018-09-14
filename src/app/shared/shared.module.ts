import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordValidator } from './validator/password-validator';
import { ModalModule } from 'ngx-bootstrap';
import { EqualValidator } from './directive/equal-validator.directive';
import { EmailValidationDirective } from './directive/email-validation.directive';
import { TogglePasswordMaskComponent } from '../layout/toggle-password-mask/toggle-password-mask.component';
import { ChatPinComponent } from '../layout/chat-pin/chat-pin.component';
import { OneTimePasswordComponent } from '../layout/one-time-password/one-time-password.component';
import { NgxMaskModule } from 'ngx-mask'
// import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  declarations: [
    EmailValidationDirective,
    EqualValidator,
    ChatPinComponent,
    OneTimePasswordComponent,
    TogglePasswordMaskComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EmailValidationDirective,
    EqualValidator,
    ChatPinComponent,
    NgxMaskModule,
    TogglePasswordMaskComponent
  ],
  entryComponents: [ChatPinComponent]
})
export class SharedModule { }

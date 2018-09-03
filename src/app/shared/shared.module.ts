import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PasswordValidator} from './validator/password-validator';
import {EqualValidator} from './directive/equal-validator.directive';
import {EmailValidationDirective} from './directive/email-validation.directive';
// import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    EmailValidationDirective,
    EqualValidator
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EmailValidationDirective,
    EqualValidator
  ]
})
export class SharedModule { }

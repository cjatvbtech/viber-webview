import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import $ from 'jquery';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.scss']
})
export class ValidateOtpComponent implements OnInit, OnDestroy {

  validateOTPForm: FormGroup;
  constructor(
    private _fB: FormBuilder  
  ) {
    this.validateOTPForm = this._fB.group({
      pin: ['', [Validators.required, Validators.pattern('[\d]{4}')]],
      pin_one: ['', Validators.required],
      pin_two: ['', Validators.required],
      pin_three: ['', Validators.required],
      pin_four: ['', Validators.required],
      pin_five: ['', Validators.required],
      pin_six: ['', Validators.required],
    });
  }

  get pin() {
    return this.validateOTPForm.get('pin');
  }

  get pin_one() {
    return this.validateOTPForm.get('pin_one');
  }

  get pin_two() {
    return this.validateOTPForm.get('pin_two');
  }

  get pin_three() {
    return this.validateOTPForm.get('pin_three');
  }

  get pin_four() {
    return this.validateOTPForm.get('pin_four');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onKey(event: any) {
    
  }

}

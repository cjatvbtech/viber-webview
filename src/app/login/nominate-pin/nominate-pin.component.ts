import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PinValidator } from '../../shared/validator/pin-validator';
import { DataService } from '../../core/services/data.service';
import { Title } from '@angular/platform-browser';

import $ from 'jquery';

@Component({
  selector: 'app-nominate-pin',
  templateUrl: './nominate-pin.component.html',
  styleUrls: ['./nominate-pin.component.scss']
})
export class NominatePinComponent implements OnInit, OnDestroy {

  nominateChatPinForm: FormGroup;
  isSubmitted: boolean;
  disabledBtn: boolean;
  pin_focus: string | number;
  repin_focus: string | number;

  constructor(
    private _fB: FormBuilder,
    private dS: DataService,
    private titleService: Title
  ) {
    this.nominateChatPinForm = this._fB.group({
      pin: ['', [Validators.required, Validators.minLength(4)]],
      pin_one: [''],
      pin_two: [''],
      pin_three: [''],
      pin_four: [''],
      repin: ['', [Validators.required, Validators.minLength(4)]],
      repin_one: [''],
      repin_two: [''],
      repin_three: [''],
      repin_four: [''],
    }, {
      validator: PinValidator.MatchPin
    });
  }
  

  get form() {
    this.dS.validateFields(this.nominateChatPinForm);
    return this.nominateChatPinForm;
  }

  get pin() {
    return this.nominateChatPinForm.get('pin');
  }

  get pin_one() {
    return this.nominateChatPinForm.get('pin_one');
  }

  get pin_two() {
    return this.nominateChatPinForm.get('pin_two');
  }

  get pin_three() {
    return this.nominateChatPinForm.get('pin_three');
  }

  get pin_four() {
    return this.nominateChatPinForm.get('pin_four');
  }

  get repin() {
    return this.nominateChatPinForm.get('repin');
  }

  get repin_one() {
    return this.nominateChatPinForm.get('repin_one');
  }

  get repin_two() {
    return this.nominateChatPinForm.get('repin_two');
  }

  get repin_three() {
    return this.nominateChatPinForm.get('repin_three');
  }

  get repin_four() {
    return this.nominateChatPinForm.get('repin_four');
  }

  ngOnInit() {
    // this.nominateChatPinForm.valueChanges 
    //   .subscribe((obj: any) => {
    //     this.disabledBtn = this.nominateChatPinForm.valid;
    //   });
    //console.log(window.navigator.userAgent);
    this.titleService.setTitle('Nominate PIN');
    if (window.navigator.userAgent.match(/iPhone/i)) {
			$('input.pin-filler').css({ left: '-9999px' });
    }
    
    $('.pin-indicator').on('focus', function(){
			let pinObj = $(this).closest('.form-group').find('.pin-filler');
			pinObj.focus();
    });
  }

  ngOnDestroy() {
  }

  onKey(event: any, prefix: string) {
		let anum = ['one', 'two', 'three', 'four'],
      _chars = event.target.value,
      _cLength = _chars.toString().length;
      
		if (_cLength <= 4) {
      this[prefix + 'focus'] = _cLength;
			for (let i in anum) {
			 	let _pin = _chars.toString()[i] == null ?
          "" : _chars.toString()[i];
        this[prefix + anum[i]].setValue(_pin);
			}
		}
  }
  
  onBlur (prefix: string) {
    this[prefix + 'focus'] = 0;
  }
  
  onFocus (event: any, prefix: string) {
    let _chars = event.target.value,
      _cLength = _chars.toString().length;

    if (_cLength <= 4) {
      this[prefix + 'focus'] = _cLength;
    }
  }

  savePin() {
    window.close();
  }

}

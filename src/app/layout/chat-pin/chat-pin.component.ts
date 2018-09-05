import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../core/services/data.service';

import $ from 'jquery';

@Component({
  selector: 'app-chat-pin',
  templateUrl: './chat-pin.component.html',
  styleUrls: ['./chat-pin.component.scss']
})
export class ChatPinComponent implements OnInit, OnDestroy {
  
  chatPinForm: FormGroup;
  isSubmitted: boolean;
  disabledBtn: boolean;
  pin_focus: string | number;
  
  constructor(
    private _fB: FormBuilder,
    private dS: DataService
  ) {
    this.chatPinForm = this._fB.group({
      pin: ['', [Validators.required, Validators.minLength(4)]],
      pin_one: [''],
      pin_two: [''],
      pin_three: [''],
      pin_four: ['']
    });
  }

  ngOnInit() {
    
    if (window.navigator.userAgent.match(/iPhone/i)) {
			$('input.pin-filler').css({ left: '-9999px' });
    }
    
    $('.pin-indicator').on('focus', function(){
			let pinObj = $(this).closest('.form-group').find('.pin-filler');
			pinObj.focus();
    });
  }

  get pin() {
    return this.chatPinForm.get('pin');
  }

  get pin_one() {
    return this.chatPinForm.get('pin_one');
  }

  get pin_two() {
    return this.chatPinForm.get('pin_two');
  }

  get pin_three() {
    return this.chatPinForm.get('pin_three');
  }

  get pin_four() {
    return this.chatPinForm.get('pin_four');
  }

  ngOnDestroy() {

  }

  onKey(event: any) {
		let anum = ['one', 'two', 'three', 'four'],
      _chars = event.target.value,
      _cLength = _chars.toString().length;
      
		if (_cLength <= 4) {
      this.pin_focus = _cLength;
			for (let i in anum) {
			 	let _pin = _chars.toString()[i] == null ?
          "" : _chars.toString()[i];
        this["pin_" + anum[i]].setValue(_pin);
			}
		}
  }
  
  onBlur () {
    this.pin_focus = 0;
  }
  
  onFocus (event: any) {
    let _chars = event.target.value,
      _cLength = _chars.toString().length;

    if (_cLength <= 4) {
      this.pin_focus = _cLength;
    }
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import $ from 'jquery';

@Component({
  selector: 'app-chat-pin',
  templateUrl: './chat-pin.component.html',
  styleUrls: ['./chat-pin.component.scss']
})
export class ChatPinComponent implements OnInit, OnDestroy {
  
  chatPinForm: FormGroup;
  
  constructor(
    private _fB: FormBuilder  
  ) {
    this.chatPinForm = this._fB.group({
      pin: ['', Validators.required],
      pin_one: ['', Validators.required],
      pin_two: ['', Validators.required],
      pin_three: ['', Validators.required],
      pin_four: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(window.navigator.userAgent);
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

  onKey(event: any) {
		let anum = ['one', 'two', 'three', 'four'],
      _chars = event.target.value;
      
		if (_chars.toString().length <= 6) {
			for (let i in anum) {
			 	this['pin_' + anum[i]] = _chars.toString()[i] == null ?
          "" : _chars.toString()[i];
			}
		}
	}

}

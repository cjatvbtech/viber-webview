import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { blockTransition } from '../../shared/animations/block.animations';
import $ from 'jquery';

@Component({
  selector: 'app-chat-pin',
  templateUrl: './chat-pin.component.html',
  styleUrls: ['./chat-pin.component.scss'],
  animations: [ blockTransition ]
})
export class ChatPinComponent implements OnInit, OnDestroy {
  chatPinForm: FormGroup;
  isSubmitted: boolean;
  disabledBtn: boolean;
  pin_focus: string | number;
  @ViewChild('modalChatPIN') modalChatPIN: TemplateRef<any>;
  
  constructor(
    private _fB: FormBuilder,
    private dS: DataService,
    private modal: NgbModal
  ) {
    this.chatPinForm = this._fB.group({
      pin: ['', Validators.required],
      pin_one: [''],
      pin_two: [''],
      pin_three: [''],
      pin_four: ['']
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.execModal();
      this.runJqueryCodes();
    });
  }

  runJqueryCodes() {
    if (window.navigator.userAgent.match(/iPhone/i)) {
			$('input.pin-filler').css({ left: '-9999px' });
    }
    
    $('.pin-indicator').on('focus', function(){
			let pinObj = $(this).closest('.form-group').find('.pin-filler');
			pinObj.focus();
    });
  }

  execModal() {
    this.modal.open(this.modalChatPIN, {centered: true, backdrop: 'static', keyboard: false})
      .result.then((result) => {
        console.log('It was ' + result);
      }, (reason) => {
        console.log(reason);
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
    // this.modalRef.close()
    // this.activeModal.dismiss();
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

  confirm() {
  }

}

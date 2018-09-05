import { Component, OnInit, OnDestroy, Input, Directive, ContentChild, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/do';

import $ from 'jquery';

@Component({
  selector: 'toggle-password',
  templateUrl: './toggle-password-mask.component.html',
  styleUrls: ['./toggle-password-mask.component.scss']
})
export class TogglePasswordMaskComponent implements OnInit, AfterViewInit, OnDestroy {

  show = false;
  isPin = false;
  wrap: any;

  @Input() isAcctNumber: string;
  @Input() inputType: string = 'text';
  @Input() accntModel: any;
  isAcct: boolean;
  hasKeyin: boolean;
  ctrlPlaceholder: string;

  @ContentChildren("togglePasswordMask") inputControls: QueryList<any>;
  @ContentChild("accountNumberCtrl") inputAcct: any;

  constructor() {}

  ngOnInit () {
    this.isAcct = this.isAcctNumber !== "true" ? false : true;
    if (this.isAcct) {
      //this.acctFrmControl = new FormControl();
      //this.inputAcct.nativeElement.type = 'hidden';
      this.ctrlPlaceholder = this.inputAcct.nativeElement.placeholder;

      // this.acctFrmControl.valueChanges
      //   .debounceTime(100)
      //   .distinctUntilChanged()
      //   .subscribe( value => {
      //     this.accntModel.setValue(value);
      //   });
    }
  }

  ngAfterViewInit() {
    this.inputControls.forEach(input => {
      $(input.nativeElement).closest('.form-group').addClass('has-toggle-mask');
    });
  }

  ngOnDestroy() {
    this.inputControls.forEach(input => {
      $(input.nativeElement).closest('.form-group').removeClass('has-toggle-mask');
    });
  }

  togglePassword(event: any) {
    this.show = !this.show;
    this.inputControls.forEach(input => input.nativeElement.type = (this.show ? this.inputType : 'password'));
  }

  onKey(event: any) {
    let _len = event.target.value.length;
    if ([37,38,39,40].indexOf(event.keyCode) !== -1) {
      event.target.setSelectionRange(_len, _len);
      return;
    }
    if (event.ctrlKey && event.keyCode == 8) {
      this.accntModel.setValue("");
      return;
    }
    if (event.keyCode == 8) {
      this.accntModel.setValue(this.accntModel.value.slice(0, -1));
      return;
    }
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      //this.inputAcct.nativeElement.value = this.inputAcct.nativeElement.value + event.key;
      if (_len < event.target.maxLength) {
        this.accntModel.setValue(this.accntModel.value + event.key);
      }
      //this.accntModel.updateValueAndValidity();
    }
    //event.target.value = this.maskAccntNumber(this.accntModel.value);
    //event.preventDefault();
    this.hasKeyin = true;
  }

  maskAccntNumber(value: string) {
    if (value.length > 10) {
      let prefix = value.substring(0, 6),
          suffix = value.substring(value.length - 4, value.length);
      return prefix + new Array((value.length-10) + 1).join( '*' ) + suffix;
    } else {
      return value;
    }
    //this.accntModel.updateValueAndValidity();

  }

  restrictCursor(event: any): boolean {
    let _len = event.target.value.length;
    event.target.select();
    return false;
  }

  markValidity(): void {
    let ctrl = this.inputAcct.nativeElement;
    if(this.hasKeyin) {
      this.accntModel.markAsDirty({ onlySelf: true });
    }
    this.accntModel.markAsTouched({ onlySelf: true });
  }

}

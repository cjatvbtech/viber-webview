import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatPinComponent } from '../../layout/chat-pin/chat-pin.component';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit, AfterViewInit {

  @ViewChild(ChatPinComponent) chatpin:ChatPinComponent;
  constructor(
    private title: Title,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.title.setTitle('SIGN IN YOUR POB ACCOUNT');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.chatpin.execModal();
      this.chatpin.runJqueryCodes();
    });
  }

  onSelect($event) {
    this.router.navigate(['balance-inquiry/account/HF97GY643809100987'])
  }
}

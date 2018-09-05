import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.title.setTitle('SIGN IN YOUR POB ACCOUNT');
  }

  onSelect($event) {
    this.router.navigate(['balance-inquiry/account/HF97GY643809100987'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';
import { blockTransition } from '../../shared/animations/block.animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class AccountComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle("CASA ACCOUNT");
  }

}

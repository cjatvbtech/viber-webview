import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewTransactionDetail() {
    this.router.navigate(['/balance-inquiry/transaction-detail/YH7637G640098']);
  }

}

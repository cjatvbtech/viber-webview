import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAccountComponent } from './select-account/select-account.component';
import { AccountComponent } from './account/account.component';
import { routing } from './balance-inquiry.routing';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

// Re-usable layouts
import { TransactionHistoryComponent } from './layout/transaction-history/transaction-history.component';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SelectAccountComponent, AccountComponent, TransactionHistoryComponent, TransactionDetailComponent]
})
export class BalanceInquiryModule { }

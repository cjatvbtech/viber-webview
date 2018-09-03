import { TransactionAmount } from './transaction-amount.model';

export class TransactionHistory {
  date: string;
  sequence_number: string | number;
  amount: TransactionAmount;
  check_number: string;
  branch_name: string;
  description: string;
  transaction_type: string;
  running_balance: TransactionAmount;
}

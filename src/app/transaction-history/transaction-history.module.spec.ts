import { TransactionHistoryModule } from './transaction-history.module';

describe('TransactionHistoryModule', () => {
  let transactionHistoryModule: TransactionHistoryModule;

  beforeEach(() => {
    transactionHistoryModule = new TransactionHistoryModule();
  });

  it('should create an instance', () => {
    expect(transactionHistoryModule).toBeTruthy();
  });
});

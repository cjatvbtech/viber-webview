import { BalanceInquiryModule } from './balance-inquiry.module';

describe('BalanceInquiryModule', () => {
  let balanceInquiryModule: BalanceInquiryModule;

  beforeEach(() => {
    balanceInquiryModule = new BalanceInquiryModule();
  });

  it('should create an instance', () => {
    expect(balanceInquiryModule).toBeTruthy();
  });
});

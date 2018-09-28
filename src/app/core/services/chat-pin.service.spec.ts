import { TestBed, inject } from '@angular/core/testing';

import { ChatPinService } from './chat-pin.service';

describe('ChatPinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatPinService]
    });
  });

  it('should be created', inject([ChatPinService], (service: ChatPinService) => {
    expect(service).toBeTruthy();
  }));
});

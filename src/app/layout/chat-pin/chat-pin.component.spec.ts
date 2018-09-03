import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPinComponent } from './chat-pin.component';

describe('ChatPinComponent', () => {
  let component: ChatPinComponent;
  let fixture: ComponentFixture<ChatPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

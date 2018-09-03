import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatePinComponent } from './nominate-pin.component';

describe('NominatePinComponent', () => {
  let component: NominatePinComponent;
  let fixture: ComponentFixture<NominatePinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominatePinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

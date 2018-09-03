import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePasswordMaskComponent } from './toggle-password-mask.component';

describe('TogglePasswordMaskComponent', () => {
  let component: TogglePasswordMaskComponent;
  let fixture: ComponentFixture<TogglePasswordMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglePasswordMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePasswordMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

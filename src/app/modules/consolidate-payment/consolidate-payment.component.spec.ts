import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatePaymentComponent } from './consolidate-payment.component';

describe('ConsolidatePaymentComponent', () => {
  let component: ConsolidatePaymentComponent;
  let fixture: ComponentFixture<ConsolidatePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

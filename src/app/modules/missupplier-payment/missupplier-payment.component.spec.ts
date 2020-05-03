import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissupplierPaymentComponent } from './missupplier-payment.component';

describe('MissupplierPaymentComponent', () => {
  let component: MissupplierPaymentComponent;
  let fixture: ComponentFixture<MissupplierPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissupplierPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissupplierPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

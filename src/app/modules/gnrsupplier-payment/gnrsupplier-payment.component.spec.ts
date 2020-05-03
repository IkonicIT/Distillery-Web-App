import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnrsupplierPaymentComponent } from './gnrsupplier-payment.component';

describe('GnrsupplierPaymentComponent', () => {
  let component: GnrsupplierPaymentComponent;
  let fixture: ComponentFixture<GnrsupplierPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnrsupplierPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnrsupplierPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

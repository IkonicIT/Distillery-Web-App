import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentverifyComponent } from './paymentverify.component';

describe('PaymentverifyComponent', () => {
  let component: PaymentverifyComponent;
  let fixture: ComponentFixture<PaymentverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAmountComponent } from './wallet-amount.component';

describe('WalletAmountComponent', () => {
  let component: WalletAmountComponent;
  let fixture: ComponentFixture<WalletAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerChallanTransferComponent } from './retailer-challan-transfer.component';

describe('RetailerChallanTransferComponent', () => {
  let component: RetailerChallanTransferComponent;
  let fixture: ComponentFixture<RetailerChallanTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerChallanTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerChallanTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

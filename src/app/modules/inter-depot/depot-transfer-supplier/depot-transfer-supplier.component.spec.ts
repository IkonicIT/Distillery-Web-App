import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotTransferSupplierComponent } from './depot-transfer-supplier.component';

describe('DepotTransferSupplierComponent', () => {
  let component: DepotTransferSupplierComponent;
  let fixture: ComponentFixture<DepotTransferSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotTransferSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotTransferSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

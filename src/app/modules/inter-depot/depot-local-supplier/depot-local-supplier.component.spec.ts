import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotLocalSupplierComponent } from './depot-local-supplier.component';

describe('DepotLocalSupplierComponent', () => {
  let component: DepotLocalSupplierComponent;
  let fixture: ComponentFixture<DepotLocalSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotLocalSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotLocalSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

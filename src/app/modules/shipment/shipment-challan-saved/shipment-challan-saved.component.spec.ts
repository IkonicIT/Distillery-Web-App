import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentChallanSavedComponent } from './shipment-challan-saved.component';

describe('ShipmentChallanSavedComponent', () => {
  let component: ShipmentChallanSavedComponent;
  let fixture: ComponentFixture<ShipmentChallanSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentChallanSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentChallanSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTransportOfsSavedTableSavedComponent } from './shipment-transport-ofs-saved-table-saved.component';

describe('ShipmentTransportOfsSavedTableSavedComponent', () => {
  let component: ShipmentTransportOfsSavedTableSavedComponent;
  let fixture: ComponentFixture<ShipmentTransportOfsSavedTableSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTransportOfsSavedTableSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTransportOfsSavedTableSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

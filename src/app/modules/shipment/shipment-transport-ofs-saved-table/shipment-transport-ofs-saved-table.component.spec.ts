import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTransportOfsSavedTableComponent } from './shipment-transport-ofs-saved-table.component';

describe('ShipmentTransportOfsSavedTableComponent', () => {
  let component: ShipmentTransportOfsSavedTableComponent;
  let fixture: ComponentFixture<ShipmentTransportOfsSavedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTransportOfsSavedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTransportOfsSavedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

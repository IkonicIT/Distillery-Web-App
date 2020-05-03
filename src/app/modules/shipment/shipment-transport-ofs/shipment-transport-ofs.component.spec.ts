import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTransportOfsComponent } from './shipment-transport-ofs.component';

describe('ShipmentTransportOfsComponent', () => {
  let component: ShipmentTransportOfsComponent;
  let fixture: ComponentFixture<ShipmentTransportOfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTransportOfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTransportOfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRouteAddedComponent } from './shipment-route-added.component';

describe('ShipmentRouteAddedComponent', () => {
  let component: ShipmentRouteAddedComponent;
  let fixture: ComponentFixture<ShipmentRouteAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentRouteAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRouteAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

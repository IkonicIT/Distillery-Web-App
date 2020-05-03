import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRouteComponent } from './shipment-route.component';

describe('ShipmentRouteComponent', () => {
  let component: ShipmentRouteComponent;
  let fixture: ComponentFixture<ShipmentRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

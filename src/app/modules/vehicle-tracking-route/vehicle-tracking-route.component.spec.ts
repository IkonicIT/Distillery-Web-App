import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackingRouteComponent } from './vehicle-tracking-route.component';

describe('VehicleTrackingRouteComponent', () => {
  let component: VehicleTrackingRouteComponent;
  let fixture: ComponentFixture<VehicleTrackingRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrackingRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrackingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

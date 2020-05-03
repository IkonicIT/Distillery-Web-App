import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleTrackingComponent } from './add-vehicle-tracking.component';

describe('AddVehicleTrackingComponent', () => {
  let component: AddVehicleTrackingComponent;
  let fixture: ComponentFixture<AddVehicleTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

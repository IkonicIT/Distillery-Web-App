import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDistilleryComponent } from './shipment-distillery.component';

describe('ShipmentDistilleryComponent', () => {
  let component: ShipmentDistilleryComponent;
  let fixture: ComponentFixture<ShipmentDistilleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentDistilleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDistilleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentGrnComponent } from './shipment-grn.component';

describe('ShipmentGrnComponent', () => {
  let component: ShipmentGrnComponent;
  let fixture: ComponentFixture<ShipmentGrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentGrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRouterComponent } from './shipment-router.component';

describe('ShipmentRouterComponent', () => {
  let component: ShipmentRouterComponent;
  let fixture: ComponentFixture<ShipmentRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDepotComponent } from './shipment-depot.component';

describe('ShipmentDepotComponent', () => {
  let component: ShipmentDepotComponent;
  let fixture: ComponentFixture<ShipmentDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

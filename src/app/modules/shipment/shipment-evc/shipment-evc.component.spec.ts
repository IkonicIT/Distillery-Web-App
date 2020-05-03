import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentEvcComponent } from './shipment-evc.component';

describe('ShipmentEvcComponent', () => {
  let component: ShipmentEvcComponent;
  let fixture: ComponentFixture<ShipmentEvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentEvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentEvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

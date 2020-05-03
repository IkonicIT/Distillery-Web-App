import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentOfsComponent } from './shipment-ofs.component';

describe('ShipmentOfsComponent', () => {
  let component: ShipmentOfsComponent;
  let fixture: ComponentFixture<ShipmentOfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentOfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentOfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

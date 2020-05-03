import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRevalidationComponent } from './shipment-revalidation.component';

describe('ShipmentRevalidationComponent', () => {
  let component: ShipmentRevalidationComponent;
  let fixture: ComponentFixture<ShipmentRevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentRevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTpGenerationComponent } from './shipment-tp-generation.component';

describe('ShipmentTpGenerationComponent', () => {
  let component: ShipmentTpGenerationComponent;
  let fixture: ComponentFixture<ShipmentTpGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTpGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTpGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

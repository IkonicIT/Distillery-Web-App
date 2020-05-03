import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentEditPreviewComponent } from './shipment-edit-preview.component';

describe('ShipmentEditPreviewComponent', () => {
  let component: ShipmentEditPreviewComponent;
  let fixture: ComponentFixture<ShipmentEditPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentEditPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentEditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

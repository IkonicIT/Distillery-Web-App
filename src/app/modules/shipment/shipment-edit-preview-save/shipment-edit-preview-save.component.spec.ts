import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentEditPreviewSaveComponent } from './shipment-edit-preview-save.component';

describe('ShipmentEditPreviewSaveComponent', () => {
  let component: ShipmentEditPreviewSaveComponent;
  let fixture: ComponentFixture<ShipmentEditPreviewSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentEditPreviewSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentEditPreviewSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

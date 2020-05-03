import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportShipmentComponent } from './import-shipment.component';

describe('ImportShipmentComponent', () => {
  let component: ImportShipmentComponent;
  let fixture: ComponentFixture<ImportShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

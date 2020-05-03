import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentGenerateListComponent } from './shipment-generate-list.component';

describe('ShipmentGenerateListComponent', () => {
  let component: ShipmentGenerateListComponent;
  let fixture: ComponentFixture<ShipmentGenerateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentGenerateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentGenerateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

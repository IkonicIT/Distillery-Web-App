import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTransportOfsSaveComponent } from './shipment-transport-ofs-save.component';

describe('ShipmentTransportOfsSaveComponent', () => {
  let component: ShipmentTransportOfsSaveComponent;
  let fixture: ComponentFixture<ShipmentTransportOfsSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTransportOfsSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTransportOfsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

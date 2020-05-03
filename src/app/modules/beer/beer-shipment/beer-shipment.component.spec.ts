import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerShipmentComponent } from './beer-shipment.component';

describe('BeerShipmentComponent', () => {
  let component: BeerShipmentComponent;
  let fixture: ComponentFixture<BeerShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

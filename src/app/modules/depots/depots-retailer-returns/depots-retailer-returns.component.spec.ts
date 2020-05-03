import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsRetailerReturnsComponent } from './depots-retailer-returns.component';

describe('DepotsRetailerReturnsComponent', () => {
  let component: DepotsRetailerReturnsComponent;
  let fixture: ComponentFixture<DepotsRetailerReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotsRetailerReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsRetailerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

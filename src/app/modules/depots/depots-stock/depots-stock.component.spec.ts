import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsStockComponent } from './depots-stock.component';

describe('StockComponent', () => {
  let component: DepotsStockComponent;
  let fixture: ComponentFixture<DepotsStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotsStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

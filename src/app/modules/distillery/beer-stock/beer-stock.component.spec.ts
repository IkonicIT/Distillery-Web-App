import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStockComponent } from './beer-stock.component';

describe('BeerStockComponent', () => {
  let component: BeerStockComponent;
  let fixture: ComponentFixture<BeerStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

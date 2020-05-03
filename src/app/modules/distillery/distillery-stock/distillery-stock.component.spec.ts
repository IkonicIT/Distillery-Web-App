import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryStockComponent } from './distillery-stock.component';

describe('DistilleryStockComponent', () => {
  let component: DistilleryStockComponent;
  let fixture: ComponentFixture<DistilleryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

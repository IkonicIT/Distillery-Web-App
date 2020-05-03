import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineEditBatchQuantityComponent } from './production-line-edit-batch-quantity.component';

describe('ProductionLineEditBatchQuantityComponent', () => {
  let component: ProductionLineEditBatchQuantityComponent;
  let fixture: ComponentFixture<ProductionLineEditBatchQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineEditBatchQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineEditBatchQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

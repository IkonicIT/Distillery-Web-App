import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineEditBatchQuantitySuccessComponent } from './production-line-edit-batch-quantity-success.component';

describe('ProductionLineEditBatchQuantitySuccessComponent', () => {
  let component: ProductionLineEditBatchQuantitySuccessComponent;
  let fixture: ComponentFixture<ProductionLineEditBatchQuantitySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineEditBatchQuantitySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineEditBatchQuantitySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

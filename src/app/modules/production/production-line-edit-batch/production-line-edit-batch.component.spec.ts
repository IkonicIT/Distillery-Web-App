import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineEditBatchComponent } from './production-line-edit-batch.component';

describe('ProductionLineEditBatchComponent', () => {
  let component: ProductionLineEditBatchComponent;
  let fixture: ComponentFixture<ProductionLineEditBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineEditBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineEditBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineAllocationComponent } from './production-line-allocation.component';

describe('ProductionLineAllocationComponent', () => {
  let component: ProductionLineAllocationComponent;
  let fixture: ComponentFixture<ProductionLineAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

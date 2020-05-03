import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsItemcodeMappingComponent } from './products-itemcode-mapping.component';

describe('ProductsItemcodeMappingComponent', () => {
  let component: ProductsItemcodeMappingComponent;
  let fixture: ComponentFixture<ProductsItemcodeMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsItemcodeMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsItemcodeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

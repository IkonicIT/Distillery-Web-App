import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsProductsComponent } from './products-products.component';

describe('ProductsProductsComponent', () => {
  let component: ProductsProductsComponent;
  let fixture: ComponentFixture<ProductsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

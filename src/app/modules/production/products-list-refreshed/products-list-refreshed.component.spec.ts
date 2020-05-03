import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListRefreshedComponent } from './products-list-refreshed.component';

describe('ProductsListRefreshedComponent', () => {
  let component: ProductsListRefreshedComponent;
  let fixture: ComponentFixture<ProductsListRefreshedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListRefreshedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListRefreshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

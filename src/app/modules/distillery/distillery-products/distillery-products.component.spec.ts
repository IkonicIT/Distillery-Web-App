import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryProductsComponent } from './distillery-products.component';

describe('DistilleryProductsComponent', () => {
  let component: DistilleryProductsComponent;
  let fixture: ComponentFixture<DistilleryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

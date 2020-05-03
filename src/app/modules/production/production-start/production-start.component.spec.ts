import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionStartComponent } from './production-start.component';

describe('ProductionStartComponent', () => {
  let component: ProductionStartComponent;
  let fixture: ComponentFixture<ProductionStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

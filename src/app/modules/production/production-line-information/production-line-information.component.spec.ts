import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineInformationComponent } from './production-line-information.component';

describe('ProductionLineInformationComponent', () => {
  let component: ProductionLineInformationComponent;
  let fixture: ComponentFixture<ProductionLineInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

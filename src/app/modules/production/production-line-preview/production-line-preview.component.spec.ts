import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLinePreviewComponent } from './production-line-preview.component';

describe('ProductionLinePreviewComponent', () => {
  let component: ProductionLinePreviewComponent;
  let fixture: ComponentFixture<ProductionLinePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLinePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

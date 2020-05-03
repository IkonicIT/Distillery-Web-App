import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualProductionCaseAssociationPreviewComponent } from './manual-production-case-association-preview.component';

describe('ManualProductionCaseAssociationPreviewComponent', () => {
  let component: ManualProductionCaseAssociationPreviewComponent;
  let fixture: ComponentFixture<ManualProductionCaseAssociationPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualProductionCaseAssociationPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualProductionCaseAssociationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

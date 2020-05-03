import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualProductionCaseAssociationComponent } from './manual-production-case-association.component';

describe('ManualProductionCaseAssociationComponent', () => {
  let component: ManualProductionCaseAssociationComponent;
  let fixture: ComponentFixture<ManualProductionCaseAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualProductionCaseAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualProductionCaseAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

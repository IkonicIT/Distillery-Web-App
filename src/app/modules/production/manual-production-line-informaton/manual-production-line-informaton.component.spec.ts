import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualProductionLineInformatonComponent } from './manual-production-line-informaton.component';

describe('ManualProductionLineInformatonComponent', () => {
  let component: ManualProductionLineInformatonComponent;
  let fixture: ComponentFixture<ManualProductionLineInformatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualProductionLineInformatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualProductionLineInformatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

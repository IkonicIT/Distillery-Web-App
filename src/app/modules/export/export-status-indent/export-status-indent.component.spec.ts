import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStatusIndentComponent } from './export-status-indent.component';

describe('ExportStatusIndentComponent', () => {
  let component: ExportStatusIndentComponent;
  let fixture: ComponentFixture<ExportStatusIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportStatusIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportStatusIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportIndentExportSaveComponent } from './export-indent-export-save.component';

describe('ExportIndentExportSaveComponent', () => {
  let component: ExportIndentExportSaveComponent;
  let fixture: ComponentFixture<ExportIndentExportSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportIndentExportSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportIndentExportSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

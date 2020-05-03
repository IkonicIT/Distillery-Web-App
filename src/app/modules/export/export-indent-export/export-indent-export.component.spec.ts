import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportIndentExportComponent } from './export-indent-export.component';

describe('ExportIndentExportComponent', () => {
  let component: ExportIndentExportComponent;
  let fixture: ComponentFixture<ExportIndentExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportIndentExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportIndentExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

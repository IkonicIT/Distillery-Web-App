import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExportComponent } from './export-export.component';

describe('ExportExportComponent', () => {
  let component: ExportExportComponent;
  let fixture: ComponentFixture<ExportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

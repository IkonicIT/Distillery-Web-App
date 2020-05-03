import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentExportSubmittedComponent } from './indent-export-submitted.component';

describe('IndentExportSubmittedComponent', () => {
  let component: IndentExportSubmittedComponent;
  let fixture: ComponentFixture<IndentExportSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentExportSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentExportSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

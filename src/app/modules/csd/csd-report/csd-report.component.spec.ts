import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdReportComponent } from './csd-report.component';

describe('CsdReportComponent', () => {
  let component: CsdReportComponent;
  let fixture: ComponentFixture<CsdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

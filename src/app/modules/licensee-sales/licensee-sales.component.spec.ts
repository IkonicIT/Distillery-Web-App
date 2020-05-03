import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseeSalesComponent } from './licensee-sales.component';

describe('LicenseeSalesComponent', () => {
  let component: LicenseeSalesComponent;
  let fixture: ComponentFixture<LicenseeSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseeSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

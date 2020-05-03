import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseeProfilesComponent } from './licensee-profiles.component';

describe('LicenseeProfilesComponent', () => {
  let component: LicenseeProfilesComponent;
  let fixture: ComponentFixture<LicenseeProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseeProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseeProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProfilesComponent } from './license-profiles.component';

describe('LicenseProfilesComponent', () => {
  let component: LicenseProfilesComponent;
  let fixture: ComponentFixture<LicenseProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

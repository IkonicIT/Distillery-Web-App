import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseeStatusComponent } from './licensee-status.component';

describe('LicenseeStatusComponent', () => {
  let component: LicenseeStatusComponent;
  let fixture: ComponentFixture<LicenseeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

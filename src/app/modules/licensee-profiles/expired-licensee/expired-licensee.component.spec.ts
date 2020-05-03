import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredLicenseeComponent } from './expired-licensee.component';

describe('ExpiredLicenseeComponent', () => {
  let component: ExpiredLicenseeComponent;
  let fixture: ComponentFixture<ExpiredLicenseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredLicenseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredLicenseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

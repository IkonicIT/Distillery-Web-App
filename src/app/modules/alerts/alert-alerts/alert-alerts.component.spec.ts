import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAlertsComponent } from './alert-alerts.component';

describe('AlertAlertsComponent', () => {
  let component: AlertAlertsComponent;
  let fixture: ComponentFixture<AlertAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

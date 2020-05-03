import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCircularsComponent } from './alert-circulars.component';

describe('AlertCircularsComponent', () => {
  let component: AlertCircularsComponent;
  let fixture: ComponentFixture<AlertCircularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCircularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCircularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

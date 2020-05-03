import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSampleStatusWindowComponent } from './lab-sample-status-window.component';

describe('LabSampleStatusWindowComponent', () => {
  let component: LabSampleStatusWindowComponent;
  let fixture: ComponentFixture<LabSampleStatusWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSampleStatusWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSampleStatusWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

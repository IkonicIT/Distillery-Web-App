import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBatchDeactivationStatusComponent } from './lab-batch-deactivation-status.component';

describe('LabBatchDeactivationStatusComponent', () => {
  let component: LabBatchDeactivationStatusComponent;
  let fixture: ComponentFixture<LabBatchDeactivationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabBatchDeactivationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabBatchDeactivationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBatchDeactivationComponent } from './lab-batch-deactivation.component';

describe('LabBatchDeactivationComponent', () => {
  let component: LabBatchDeactivationComponent;
  let fixture: ComponentFixture<LabBatchDeactivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabBatchDeactivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabBatchDeactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSampleFormComponent } from './lab-sample-form.component';

describe('LabSampleFormComponent', () => {
  let component: LabSampleFormComponent;
  let fixture: ComponentFixture<LabSampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSampleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

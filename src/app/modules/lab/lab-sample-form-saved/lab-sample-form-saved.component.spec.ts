import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSampleFormSavedComponent } from './lab-sample-form-saved.component';

describe('LabSampleFormSavedComponent', () => {
  let component: LabSampleFormSavedComponent;
  let fixture: ComponentFixture<LabSampleFormSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSampleFormSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSampleFormSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

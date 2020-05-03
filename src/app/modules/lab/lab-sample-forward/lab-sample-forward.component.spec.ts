import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSampleForwardComponent } from './lab-sample-forward.component';

describe('LabSampleForwardComponent', () => {
  let component: LabSampleForwardComponent;
  let fixture: ComponentFixture<LabSampleForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSampleForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSampleForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

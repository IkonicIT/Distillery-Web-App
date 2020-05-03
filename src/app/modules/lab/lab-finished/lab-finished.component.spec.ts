import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabFinishedComponent } from './lab-finished.component';

describe('LabFinishedComponent', () => {
  let component: LabFinishedComponent;
  let fixture: ComponentFixture<LabFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

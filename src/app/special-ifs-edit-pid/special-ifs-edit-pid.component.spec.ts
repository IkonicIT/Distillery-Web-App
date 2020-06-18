import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsEditPidComponent } from './special-ifs-edit-pid.component';

describe('SpecialIfsEditPidComponent', () => {
  let component: SpecialIfsEditPidComponent;
  let fixture: ComponentFixture<SpecialIfsEditPidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsEditPidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsEditPidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

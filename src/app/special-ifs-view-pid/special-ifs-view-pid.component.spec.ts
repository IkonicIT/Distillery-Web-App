import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsViewPidComponent } from './special-ifs-view-pid.component';

describe('SpecialIfsViewPidComponent', () => {
  let component: SpecialIfsViewPidComponent;
  let fixture: ComponentFixture<SpecialIfsViewPidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsViewPidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsViewPidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

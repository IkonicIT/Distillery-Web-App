import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsDeletePidComponent } from './special-ifs-delete-pid.component';

describe('SpecialIfsDeletePidComponent', () => {
  let component: SpecialIfsDeletePidComponent;
  let fixture: ComponentFixture<SpecialIfsDeletePidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsDeletePidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsDeletePidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

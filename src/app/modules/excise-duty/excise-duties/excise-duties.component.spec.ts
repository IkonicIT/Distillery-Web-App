import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseDutiesComponent } from './excise-duties.component';

describe('ExciseDutiesComponent', () => {
  let component: ExciseDutiesComponent;
  let fixture: ComponentFixture<ExciseDutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseDutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

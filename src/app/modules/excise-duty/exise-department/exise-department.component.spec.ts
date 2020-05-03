import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExiseDepartmentComponent } from './exise-department.component';

describe('ExiseDepartmentComponent', () => {
  let component: ExiseDepartmentComponent;
  let fixture: ComponentFixture<ExiseDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExiseDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExiseDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

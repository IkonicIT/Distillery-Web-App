import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentManagementComponent } from './indent-management.component';

describe('IndentManagementComponent', () => {
  let component: IndentManagementComponent;
  let fixture: ComponentFixture<IndentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

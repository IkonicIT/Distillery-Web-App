import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentManagementHomeComponent } from './indent-management-home.component';

describe('IndentManagementHomeComponent', () => {
  let component: IndentManagementHomeComponent;
  let fixture: ComponentFixture<IndentManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

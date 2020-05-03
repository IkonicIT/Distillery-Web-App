import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExiseRemitanceFormComponent } from './exise-remitance-form.component';

describe('ExiseRemitanceFormComponent', () => {
  let component: ExiseRemitanceFormComponent;
  let fixture: ComponentFixture<ExiseRemitanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExiseRemitanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExiseRemitanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExiseRemitanceComponent } from './exise-remitance.component';

describe('ExiseRemitanceComponent', () => {
  let component: ExiseRemitanceComponent;
  let fixture: ComponentFixture<ExiseRemitanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExiseRemitanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExiseRemitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

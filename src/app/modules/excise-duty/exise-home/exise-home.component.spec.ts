import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExiseHomeComponent } from './exise-home.component';

describe('ExiseHomeComponent', () => {
  let component: ExiseHomeComponent;
  let fixture: ComponentFixture<ExiseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExiseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExiseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

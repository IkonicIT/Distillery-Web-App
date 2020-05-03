import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakagesComponent } from './breakages.component';

describe('BreakagesComponent', () => {
  let component: BreakagesComponent;
  let fixture: ComponentFixture<BreakagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

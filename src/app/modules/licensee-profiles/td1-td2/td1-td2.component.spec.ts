import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Td1Td2Component } from './td1-td2.component';

describe('Td1Td2Component', () => {
  let component: Td1Td2Component;
  let fixture: ComponentFixture<Td1Td2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Td1Td2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Td1Td2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

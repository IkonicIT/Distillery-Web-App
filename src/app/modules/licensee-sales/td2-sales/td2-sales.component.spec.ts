import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Td2SalesComponent } from './td2-sales.component';

describe('Td2SalesComponent', () => {
  let component: Td2SalesComponent;
  let fixture: ComponentFixture<Td2SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Td2SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Td2SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

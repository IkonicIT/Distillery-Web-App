import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Td1SalesComponent } from './td1-sales.component';

describe('Td1SalesComponent', () => {
  let component: Td1SalesComponent;
  let fixture: ComponentFixture<Td1SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Td1SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Td1SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSalesComponent } from './bar-sales.component';

describe('BarSalesComponent', () => {
  let component: BarSalesComponent;
  let fixture: ComponentFixture<BarSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

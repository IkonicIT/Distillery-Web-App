import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletSalesComponent } from './outlet-sales.component';

describe('OutletSalesComponent', () => {
  let component: OutletSalesComponent;
  let fixture: ComponentFixture<OutletSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

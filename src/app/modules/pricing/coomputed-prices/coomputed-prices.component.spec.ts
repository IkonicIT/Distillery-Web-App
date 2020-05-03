import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoomputedPricesComponent } from './coomputed-prices.component';

describe('CoomputedPricesComponent', () => {
  let component: CoomputedPricesComponent;
  let fixture: ComponentFixture<CoomputedPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoomputedPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoomputedPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

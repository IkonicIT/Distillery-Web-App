import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPriceRulesComponent } from './basic-price-rules.component';

describe('BasicPriceRulesComponent', () => {
  let component: BasicPriceRulesComponent;
  let fixture: ComponentFixture<BasicPriceRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPriceRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPriceRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

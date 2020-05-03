import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerCardsComponent } from './retailer-cards.component';

describe('RetailerCardsComponent', () => {
  let component: RetailerCardsComponent;
  let fixture: ComponentFixture<RetailerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

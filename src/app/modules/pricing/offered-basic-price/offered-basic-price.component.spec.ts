import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedBasicPriceComponent } from './offered-basic-price.component';

describe('OfferedBasicPriceComponent', () => {
  let component: OfferedBasicPriceComponent;
  let fixture: ComponentFixture<OfferedBasicPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferedBasicPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferedBasicPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritBlendStockComponent } from './spirit-blend-stock.component';

describe('SpiritBlendStockComponent', () => {
  let component: SpiritBlendStockComponent;
  let fixture: ComponentFixture<SpiritBlendStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritBlendStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritBlendStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

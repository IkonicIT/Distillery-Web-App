import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramPurchaseIndentComponent } from './hologram-purchase-indent.component';

describe('HologramPurchaseIndentComponent', () => {
  let component: HologramPurchaseIndentComponent;
  let fixture: ComponentFixture<HologramPurchaseIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramPurchaseIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramPurchaseIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

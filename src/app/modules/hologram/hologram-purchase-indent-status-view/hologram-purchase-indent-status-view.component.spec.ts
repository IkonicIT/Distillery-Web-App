import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramPurchaseIndentStatusViewComponent } from './hologram-purchase-indent-status-view.component';

describe('HologramPurchaseIndentStatusViewComponent', () => {
  let component: HologramPurchaseIndentStatusViewComponent;
  let fixture: ComponentFixture<HologramPurchaseIndentStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramPurchaseIndentStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramPurchaseIndentStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

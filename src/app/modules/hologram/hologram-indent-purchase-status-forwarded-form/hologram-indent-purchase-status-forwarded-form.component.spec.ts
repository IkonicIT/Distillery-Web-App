import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramIndentPurchaseStatusForwardedFormComponent } from './hologram-indent-purchase-status-forwarded-form.component';

describe('HologramIndentPurchaseStatusForwardedFormComponent', () => {
  let component: HologramIndentPurchaseStatusForwardedFormComponent;
  let fixture: ComponentFixture<HologramIndentPurchaseStatusForwardedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramIndentPurchaseStatusForwardedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramIndentPurchaseStatusForwardedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

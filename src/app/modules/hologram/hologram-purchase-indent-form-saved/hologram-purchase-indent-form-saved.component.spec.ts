import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramPurchaseIndentFormSavedComponent } from './hologram-purchase-indent-form-saved.component';

describe('HologramPurchaseIndentFormSavedComponent', () => {
  let component: HologramPurchaseIndentFormSavedComponent;
  let fixture: ComponentFixture<HologramPurchaseIndentFormSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramPurchaseIndentFormSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramPurchaseIndentFormSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

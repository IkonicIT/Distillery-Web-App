import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramPurchaseIndentFormComponent } from './hologram-purchase-indent-form.component';

describe('HologramPurchaseIndentFormComponent', () => {
  let component: HologramPurchaseIndentFormComponent;
  let fixture: ComponentFixture<HologramPurchaseIndentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramPurchaseIndentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramPurchaseIndentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

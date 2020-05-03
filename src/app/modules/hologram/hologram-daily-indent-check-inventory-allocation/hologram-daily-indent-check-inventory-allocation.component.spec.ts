import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDailyIndentCheckInventoryAllocationComponent } from './hologram-daily-indent-check-inventory-allocation.component';

describe('HologramDailyIndentCheckInventoryAllocationComponent', () => {
  let component: HologramDailyIndentCheckInventoryAllocationComponent;
  let fixture: ComponentFixture<HologramDailyIndentCheckInventoryAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDailyIndentCheckInventoryAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDailyIndentCheckInventoryAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

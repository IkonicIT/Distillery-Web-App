import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDailyIndentCheckInventoryComponent } from './hologram-daily-indent-check-inventory.component';

describe('HologramDailyIndentCheckInventoryComponent', () => {
  let component: HologramDailyIndentCheckInventoryComponent;
  let fixture: ComponentFixture<HologramDailyIndentCheckInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDailyIndentCheckInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDailyIndentCheckInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

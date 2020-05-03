import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDailyIndentComponent } from './hologram-daily-indent.component';

describe('HologramDailyIndentComponent', () => {
  let component: HologramDailyIndentComponent;
  let fixture: ComponentFixture<HologramDailyIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDailyIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDailyIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

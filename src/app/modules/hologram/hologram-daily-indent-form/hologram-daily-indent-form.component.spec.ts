import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDailyIndentFormComponent } from './hologram-daily-indent-form.component';

describe('HologramDailyIndentFormComponent', () => {
  let component: HologramDailyIndentFormComponent;
  let fixture: ComponentFixture<HologramDailyIndentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDailyIndentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDailyIndentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

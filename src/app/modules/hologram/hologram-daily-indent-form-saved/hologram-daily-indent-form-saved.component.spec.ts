import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDailyIndentFormSavedComponent } from './hologram-daily-indent-form-saved.component';

describe('HologramDailyIndentFormSavedComponent', () => {
  let component: HologramDailyIndentFormSavedComponent;
  let fixture: ComponentFixture<HologramDailyIndentFormSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDailyIndentFormSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDailyIndentFormSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramUsageComponent } from './hologram-usage.component';

describe('HologramUsageComponent', () => {
  let component: HologramUsageComponent;
  let fixture: ComponentFixture<HologramUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

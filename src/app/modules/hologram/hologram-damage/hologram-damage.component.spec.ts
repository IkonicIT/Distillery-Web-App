import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDamageComponent } from './hologram-damage.component';

describe('HologramDamageComponent', () => {
  let component: HologramDamageComponent;
  let fixture: ComponentFixture<HologramDamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

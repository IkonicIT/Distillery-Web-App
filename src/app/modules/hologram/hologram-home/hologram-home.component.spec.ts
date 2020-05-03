import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramHomeComponent } from './hologram-home.component';

describe('HologramHomeComponent', () => {
  let component: HologramHomeComponent;
  let fixture: ComponentFixture<HologramHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

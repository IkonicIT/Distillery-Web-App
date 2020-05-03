import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDepotComponent } from './hologram-depot.component';

describe('HologramDepotComponent', () => {
  let component: HologramDepotComponent;
  let fixture: ComponentFixture<HologramDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

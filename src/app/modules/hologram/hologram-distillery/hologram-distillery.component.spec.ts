import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramDistilleryComponent } from './hologram-distillery.component';

describe('HologramDistilleryComponent', () => {
  let component: HologramDistilleryComponent;
  let fixture: ComponentFixture<HologramDistilleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramDistilleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramDistilleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

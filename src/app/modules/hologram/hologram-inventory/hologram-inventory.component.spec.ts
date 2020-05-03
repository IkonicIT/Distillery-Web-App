import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramInventoryComponent } from './hologram-inventory.component';

describe('HologramInventoryComponent', () => {
  let component: HologramInventoryComponent;
  let fixture: ComponentFixture<HologramInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

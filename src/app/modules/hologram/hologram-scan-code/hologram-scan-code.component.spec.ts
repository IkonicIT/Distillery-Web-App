import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramScanCodeComponent } from './hologram-scan-code.component';

describe('HologramScanCodeComponent', () => {
  let component: HologramScanCodeComponent;
  let fixture: ComponentFixture<HologramScanCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramScanCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramScanCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

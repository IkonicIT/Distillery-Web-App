import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramVerificationComponent } from './hologram-verification.component';

describe('HologramVerificationComponent', () => {
  let component: HologramVerificationComponent;
  let fixture: ComponentFixture<HologramVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

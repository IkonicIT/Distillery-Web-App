import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakageVerificationComponent } from './breakage-verification.component';

describe('BreakageVerificationComponent', () => {
  let component: BreakageVerificationComponent;
  let fixture: ComponentFixture<BreakageVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakageVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakageVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

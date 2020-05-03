import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalityDetailsComponent } from './penality-details.component';

describe('PenalityDetailsComponent', () => {
  let component: PenalityDetailsComponent;
  let fixture: ComponentFixture<PenalityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

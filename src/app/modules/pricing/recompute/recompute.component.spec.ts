import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomputeComponent } from './recompute.component';

describe('RecomputeComponent', () => {
  let component: RecomputeComponent;
  let fixture: ComponentFixture<RecomputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

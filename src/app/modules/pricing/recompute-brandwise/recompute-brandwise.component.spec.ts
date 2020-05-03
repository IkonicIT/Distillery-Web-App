import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomputeBrandwiseComponent } from './recompute-brandwise.component';

describe('RecomputeBrandwiseComponent', () => {
  let component: RecomputeBrandwiseComponent;
  let fixture: ComponentFixture<RecomputeBrandwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomputeBrandwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomputeBrandwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

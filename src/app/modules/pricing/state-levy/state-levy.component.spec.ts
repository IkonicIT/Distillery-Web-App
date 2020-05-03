import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLevyComponent } from './state-levy.component';

describe('StateLevyComponent', () => {
  let component: StateLevyComponent;
  let fixture: ComponentFixture<StateLevyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateLevyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLevyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

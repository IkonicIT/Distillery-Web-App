import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallansStatusComponent } from './challans-status.component';

describe('ChallansStatusComponent', () => {
  let component: ChallansStatusComponent;
  let fixture: ComponentFixture<ChallansStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallansStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallansStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

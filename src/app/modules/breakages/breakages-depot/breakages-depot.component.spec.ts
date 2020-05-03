import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakagesDepotComponent } from './breakages-depot.component';

describe('DepotComponent', () => {
  let component: BreakagesDepotComponent;
  let fixture: ComponentFixture<BreakagesDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakagesDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakagesDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

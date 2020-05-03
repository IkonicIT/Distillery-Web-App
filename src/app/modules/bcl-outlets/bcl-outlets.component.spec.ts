import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BclOutletsComponent } from './bcl-outlets.component';

describe('BclOutletsComponent', () => {
  let component: BclOutletsComponent;
  let fixture: ComponentFixture<BclOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BclOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BclOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

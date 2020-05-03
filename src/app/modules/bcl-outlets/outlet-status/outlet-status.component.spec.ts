import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletStatusComponent } from './outlet-status.component';

describe('OutletStatusComponent', () => {
  let component: OutletStatusComponent;
  let fixture: ComponentFixture<OutletStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

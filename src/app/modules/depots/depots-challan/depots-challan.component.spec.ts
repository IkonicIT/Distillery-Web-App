import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsChallanComponent } from './depots-challan.component';

describe('DepotsChallanComponent', () => {
  let component: DepotsChallanComponent;
  let fixture: ComponentFixture<DepotsChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotsChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

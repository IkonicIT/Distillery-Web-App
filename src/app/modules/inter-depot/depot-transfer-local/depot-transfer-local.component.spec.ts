import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotTransferLocalComponent } from './depot-transfer-local.component';

describe('DepotTransferLocalComponent', () => {
  let component: DepotTransferLocalComponent;
  let fixture: ComponentFixture<DepotTransferLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotTransferLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotTransferLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotTransferComponent } from './depot-transfer.component';

describe('DepotTransferComponent', () => {
  let component: DepotTransferComponent;
  let fixture: ComponentFixture<DepotTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

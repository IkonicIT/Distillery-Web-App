import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotTransferIndentComponent } from './depot-transfer-indent.component';

describe('DepotTransferIndentComponent', () => {
  let component: DepotTransferIndentComponent;
  let fixture: ComponentFixture<DepotTransferIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotTransferIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotTransferIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

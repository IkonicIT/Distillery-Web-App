import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsApprovalComponent } from './ofs-approval.component';

describe('OfsApprovalComponent', () => {
  let component: OfsApprovalComponent;
  let fixture: ComponentFixture<OfsApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

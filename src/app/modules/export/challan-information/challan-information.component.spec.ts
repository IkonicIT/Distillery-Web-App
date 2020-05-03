import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanInformationComponent } from './challan-information.component';

describe('ChallanInformationComponent', () => {
  let component: ChallanInformationComponent;
  let fixture: ComponentFixture<ChallanInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

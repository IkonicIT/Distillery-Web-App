import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanInformationSavedComponent } from './challan-information-saved.component';

describe('ChallanInformationSavedComponent', () => {
  let component: ChallanInformationSavedComponent;
  let fixture: ComponentFixture<ChallanInformationSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanInformationSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanInformationSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

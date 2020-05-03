import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligbilityComponent } from './eligbility.component';

describe('EligbilityComponent', () => {
  let component: EligbilityComponent;
  let fixture: ComponentFixture<EligbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

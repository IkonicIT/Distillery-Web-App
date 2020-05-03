import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledIdcComponent } from './cancelled-idc.component';

describe('CancelledIdcComponent', () => {
  let component: CancelledIdcComponent;
  let fixture: ComponentFixture<CancelledIdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledIdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledIdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

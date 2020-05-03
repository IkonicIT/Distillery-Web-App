import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdStatusComponent } from './csd-status.component';

describe('CsdStatusComponent', () => {
  let component: CsdStatusComponent;
  let fixture: ComponentFixture<CsdStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

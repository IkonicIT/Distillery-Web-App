import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsEditComponent } from './special-ifs-edit.component';

describe('SpecialIfsEditComponent', () => {
  let component: SpecialIfsEditComponent;
  let fixture: ComponentFixture<SpecialIfsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

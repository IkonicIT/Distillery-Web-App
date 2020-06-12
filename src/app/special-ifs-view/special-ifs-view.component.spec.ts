import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsViewComponent } from './special-ifs-view.component';

describe('SpecialIfsViewComponent', () => {
  let component: SpecialIfsViewComponent;
  let fixture: ComponentFixture<SpecialIfsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIfsComponent } from './special-ifs.component';

describe('SpecialIfsComponent', () => {
  let component: SpecialIfsComponent;
  let fixture: ComponentFixture<SpecialIfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

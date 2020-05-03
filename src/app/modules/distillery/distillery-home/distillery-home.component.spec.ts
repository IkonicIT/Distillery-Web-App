import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryHomeComponent } from './distillery-home.component';

describe('DistilleryHomeComponent', () => {
  let component: DistilleryHomeComponent;
  let fixture: ComponentFixture<DistilleryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

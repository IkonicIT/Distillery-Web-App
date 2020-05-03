import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryIndentComponent } from './distillery-indent.component';

describe('DistilleryIndentComponent', () => {
  let component: DistilleryIndentComponent;
  let fixture: ComponentFixture<DistilleryIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

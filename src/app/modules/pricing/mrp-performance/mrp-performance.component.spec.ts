import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrpPerformanceComponent } from './mrp-performance.component';

describe('MrpPerformanceComponent', () => {
  let component: MrpPerformanceComponent;
  let fixture: ComponentFixture<MrpPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrpPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrpPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

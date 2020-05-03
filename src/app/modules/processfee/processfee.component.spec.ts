import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessfeeComponent } from './processfee.component';

describe('ProcessfeeComponent', () => {
  let component: ProcessfeeComponent;
  let fixture: ComponentFixture<ProcessfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedRetailersComponent } from './suspended-retailers.component';

describe('SuspendedRetailersComponent', () => {
  let component: SuspendedRetailersComponent;
  let fixture: ComponentFixture<SuspendedRetailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendedRetailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

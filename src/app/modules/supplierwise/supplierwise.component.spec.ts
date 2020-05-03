import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierwiseComponent } from './supplierwise.component';

describe('SupplierwiseComponent', () => {
  let component: SupplierwiseComponent;
  let fixture: ComponentFixture<SupplierwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

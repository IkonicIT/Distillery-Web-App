import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerIndentComponent } from './retailer-indent.component';

describe('RetailerIndentComponent', () => {
  let component: RetailerIndentComponent;
  let fixture: ComponentFixture<RetailerIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

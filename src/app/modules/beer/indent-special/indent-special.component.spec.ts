import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentSpecialComponent } from './indent-special.component';

describe('IndentSpecialComponent', () => {
  let component: IndentSpecialComponent;
  let fixture: ComponentFixture<IndentSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

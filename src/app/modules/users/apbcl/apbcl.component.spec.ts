import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApbclComponent } from './apbcl.component';

describe('ApbclComponent', () => {
  let component: ApbclComponent;
  let fixture: ComponentFixture<ApbclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApbclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApbclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

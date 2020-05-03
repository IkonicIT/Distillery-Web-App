import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerIndentComponent } from './beer-indent.component';

describe('IndentComponent', () => {
  let component: BeerIndentComponent;
  let fixture: ComponentFixture<BeerIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

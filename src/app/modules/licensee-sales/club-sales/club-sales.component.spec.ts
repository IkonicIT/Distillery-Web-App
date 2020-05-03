import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSalesComponent } from './club-sales.component';

describe('ClubSalesComponent', () => {
  let component: ClubSalesComponent;
  let fixture: ComponentFixture<ClubSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

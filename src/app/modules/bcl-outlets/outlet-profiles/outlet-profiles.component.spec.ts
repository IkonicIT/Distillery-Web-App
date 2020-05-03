import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletProfilesComponent } from './outlet-profiles.component';

describe('OutletProfilesComponent', () => {
  let component: OutletProfilesComponent;
  let fixture: ComponentFixture<OutletProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

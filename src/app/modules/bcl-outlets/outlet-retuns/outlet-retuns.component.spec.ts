import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletRetunsComponent } from './outlet-retuns.component';

describe('OutletRetunsComponent', () => {
  let component: OutletRetunsComponent;
  let fixture: ComponentFixture<OutletRetunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletRetunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletRetunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

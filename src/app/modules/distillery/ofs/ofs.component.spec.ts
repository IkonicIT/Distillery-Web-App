import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsComponent } from './ofs.component';

describe('OfsComponent', () => {
  let component: OfsComponent;
  let fixture: ComponentFixture<OfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

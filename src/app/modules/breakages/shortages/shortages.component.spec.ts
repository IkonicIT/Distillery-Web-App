import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortagesComponent } from './shortages.component';

describe('ShortagesComponent', () => {
  let component: ShortagesComponent;
  let fixture: ComponentFixture<ShortagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

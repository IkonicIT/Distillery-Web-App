import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritBottlingComponent } from './spirit-bottling.component';

describe('SpiritBottlingComponent', () => {
  let component: SpiritBottlingComponent;
  let fixture: ComponentFixture<SpiritBottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritBottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritBottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

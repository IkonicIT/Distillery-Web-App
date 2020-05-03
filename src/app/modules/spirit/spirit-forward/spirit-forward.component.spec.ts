import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritForwardComponent } from './spirit-forward.component';

describe('SpiritForwardComponent', () => {
  let component: SpiritForwardComponent;
  let fixture: ComponentFixture<SpiritForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

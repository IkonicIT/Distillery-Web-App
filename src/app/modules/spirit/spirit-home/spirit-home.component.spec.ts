import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritHomeComponent } from './spirit-home.component';

describe('SpiritHomeComponent', () => {
  let component: SpiritHomeComponent;
  let fixture: ComponentFixture<SpiritHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

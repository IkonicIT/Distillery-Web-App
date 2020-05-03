import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritRequestComponent } from './spirit-request.component';

describe('SpiritRequestComponent', () => {
  let component: SpiritRequestComponent;
  let fixture: ComponentFixture<SpiritRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

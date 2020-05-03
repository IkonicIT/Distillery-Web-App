import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritRefernceComponent } from './spirit-refernce.component';

describe('SpiritRefernceComponent', () => {
  let component: SpiritRefernceComponent;
  let fixture: ComponentFixture<SpiritRefernceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritRefernceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritRefernceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

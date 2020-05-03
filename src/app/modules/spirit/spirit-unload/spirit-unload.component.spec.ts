import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritUnloadComponent } from './spirit-unload.component';

describe('SpiritUnloadComponent', () => {
  let component: SpiritUnloadComponent;
  let fixture: ComponentFixture<SpiritUnloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritUnloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritUnloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

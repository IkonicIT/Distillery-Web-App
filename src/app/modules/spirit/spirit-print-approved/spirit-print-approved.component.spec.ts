import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritPrintApprovedComponent } from './spirit-print-approved.component';

describe('SpiritPrintApprovedComponent', () => {
  let component: SpiritPrintApprovedComponent;
  let fixture: ComponentFixture<SpiritPrintApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritPrintApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritPrintApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

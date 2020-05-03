import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritProcurementComponent } from './spirit-procurement.component';

describe('SpiritProcurementComponent', () => {
  let component: SpiritProcurementComponent;
  let fixture: ComponentFixture<SpiritProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

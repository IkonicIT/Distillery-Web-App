import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritReceiptsComponent } from './spirit-receipts.component';

describe('SpiritReceiptsComponent', () => {
  let component: SpiritReceiptsComponent;
  let fixture: ComponentFixture<SpiritReceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritReceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritGenerateReceiptComponent } from './spirit-generate-receipt.component';

describe('SpiritGenerateReceiptComponent', () => {
  let component: SpiritGenerateReceiptComponent;
  let fixture: ComponentFixture<SpiritGenerateReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritGenerateReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritGenerateReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

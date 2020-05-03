import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnProcessingfeeComponent } from './grn-processingfee.component';

describe('GrnProcessingfeeComponent', () => {
  let component: GrnProcessingfeeComponent;
  let fixture: ComponentFixture<GrnProcessingfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnProcessingfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnProcessingfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

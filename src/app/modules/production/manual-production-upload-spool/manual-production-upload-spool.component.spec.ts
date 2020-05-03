import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualProductionUploadSpoolComponent } from './manual-production-upload-spool.component';

describe('ManualProductionUploadSpoolComponent', () => {
  let component: ManualProductionUploadSpoolComponent;
  let fixture: ComponentFixture<ManualProductionUploadSpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualProductionUploadSpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualProductionUploadSpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

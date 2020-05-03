import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciledChallanasComponent } from './reconciled-challanas.component';

describe('ReconciledChallanasComponent', () => {
  let component: ReconciledChallanasComponent;
  let fixture: ComponentFixture<ReconciledChallanasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciledChallanasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciledChallanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBrandWineComponent } from './reports-brand-wine.component';

describe('ReportsBrandWineComponent', () => {
  let component: ReportsBrandWineComponent;
  let fixture: ComponentFixture<ReportsBrandWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBrandWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBrandWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

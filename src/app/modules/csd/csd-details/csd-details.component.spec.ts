import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdDetailsComponent } from './csd-details.component';

describe('CsdDetailsComponent', () => {
  let component: CsdDetailsComponent;
  let fixture: ComponentFixture<CsdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

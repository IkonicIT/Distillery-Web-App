import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManulaProductionComponent } from './manula-production.component';

describe('ManulaProductionComponent', () => {
  let component: ManulaProductionComponent;
  let fixture: ComponentFixture<ManulaProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManulaProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManulaProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

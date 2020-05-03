import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgedChallansComponent } from './aged-challans.component';

describe('AgedChallansComponent', () => {
  let component: AgedChallansComponent;
  let fixture: ComponentFixture<AgedChallansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgedChallansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgedChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

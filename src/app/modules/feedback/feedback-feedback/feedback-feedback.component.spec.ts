import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFeedbackComponent } from './feedback-feedback.component';

describe('FeedbackFeedbackComponent', () => {
  let component: FeedbackFeedbackComponent;
  let fixture: ComponentFixture<FeedbackFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

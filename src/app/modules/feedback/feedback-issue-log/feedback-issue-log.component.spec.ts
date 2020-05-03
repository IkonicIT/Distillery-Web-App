import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIssueLogComponent } from './feedback-issue-log.component';

describe('FeedbackIssueLogComponent', () => {
  let component: FeedbackIssueLogComponent;
  let fixture: ComponentFixture<FeedbackIssueLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackIssueLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackIssueLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnswerReviewComponent } from './student-answer-review.component';

describe('StudentAnswerReviewComponent', () => {
  let component: StudentAnswerReviewComponent;
  let fixture: ComponentFixture<StudentAnswerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAnswerReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAnswerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

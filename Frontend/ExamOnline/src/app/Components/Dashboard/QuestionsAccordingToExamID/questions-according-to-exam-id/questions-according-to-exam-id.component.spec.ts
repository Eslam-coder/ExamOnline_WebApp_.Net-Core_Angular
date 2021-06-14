import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAccordingToExamIDComponent } from './questions-according-to-exam-id.component';

describe('QuestionsAccordingToExamIDComponent', () => {
  let component: QuestionsAccordingToExamIDComponent;
  let fixture: ComponentFixture<QuestionsAccordingToExamIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsAccordingToExamIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAccordingToExamIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionByIDComponent } from './question-by-id.component';

describe('QuestionByIDComponent', () => {
  let component: QuestionByIDComponent;
  let fixture: ComponentFixture<QuestionByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

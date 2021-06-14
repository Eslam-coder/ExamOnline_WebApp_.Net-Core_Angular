import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamByIdComponent } from './exam-by-id.component';

describe('ExamByIdComponent', () => {
  let component: ExamByIdComponent;
  let fixture: ComponentFixture<ExamByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

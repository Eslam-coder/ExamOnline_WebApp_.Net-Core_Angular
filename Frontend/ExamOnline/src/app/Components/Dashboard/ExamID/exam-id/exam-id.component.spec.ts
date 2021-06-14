import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIDComponent } from './exam-id.component';

describe('ExamIDComponent', () => {
  let component: ExamIDComponent;
  let fixture: ComponentFixture<ExamIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

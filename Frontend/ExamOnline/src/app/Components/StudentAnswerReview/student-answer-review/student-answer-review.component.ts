import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExam } from 'src/app/Interfaces/IExam/iexam';
import { IQuestion } from 'src/app/Interfaces/IQuestion/iquestion';
import { IStudentAnswer } from 'src/app/Interfaces/IStudentAsnwer/istudent-answer';
import { ExamsService } from 'src/app/Services/Exams/exams.service';
import { QuestionsService } from 'src/app/Services/Questions/questions.service';
import { StudentAnswerService } from 'src/app/Services/StudentAnswers/student-answer.service';

@Component({
  selector: 'app-student-answer-review',
  templateUrl: './student-answer-review.component.html',
  styleUrls: ['./student-answer-review.component.css']
})
export class StudentAnswerReviewComponent implements OnInit {
  StudentAnswers:any;//IStudentAnswer[];
  ExamId:number;
  StudentId:number;
  FinalGrade:number=0;
  i:number;
  QuestionsList:any;//IQuestion[];
  ExamInDb:IExam;
  QuestionsAndStudentAnswers:any[];
  constructor(private StudentAnswerServ:StudentAnswerService,
              private route:ActivatedRoute,
              private QuestionsServ:QuestionsService,
              private ExamsServ:ExamsService) { }

  ngOnInit(): void {
    //Get Exam ID From URL
    this.ExamId=this.route.snapshot.params['id'];
    console.log(this.ExamId)
    //Get Student ID From LocalStorage
    this.StudentId=Number(localStorage.getItem('token2'))
    console.log(this.StudentId)
    this.StudentAnswerServ.GetStudentAnswersByExamID(this.StudentId,this.ExamId).subscribe(
      (data)=>{
        this.StudentAnswers=data;
        //To Calculate Total Student Grade
        for(this.i=0;this.i<this.StudentAnswers.length;this.i++){
        console.log(this.StudentAnswers[this.i].studentTotalGrade);
        this.FinalGrade=this.FinalGrade+this.StudentAnswers[this.i].studentTotalGrade;
        }
        //console.log(this.FinalGrade);
        console.log(data);
      },
      (error)=>{
        console.log(error)
      }
    )
    //To Get All Questions 
    this.QuestionsServ.GetAllQuestionAccordingToExamId(this.ExamId).subscribe(
      (data)=>{
        console.log(data);
        this.QuestionsList=data;
      },
      (error)=>{
        console.log(error)
      }
    )
    
    this.ExamsServ.GetExamById(this.ExamId).subscribe(
      (data)=>{
        console.log(data);
        this.ExamInDb = data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}

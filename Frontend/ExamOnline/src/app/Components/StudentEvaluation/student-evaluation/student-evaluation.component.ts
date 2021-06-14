import { Component, OnInit } from '@angular/core';
import { StudentAnswerService } from 'src/app/Services/StudentAnswers/student-answer.service';

@Component({
  selector: 'app-student-evaluation',
  templateUrl: './student-evaluation.component.html',
  styleUrls: ['./student-evaluation.component.css']
})
export class StudentEvaluationComponent implements OnInit {
  StudentId:number;
  StudentEvaluation:any;
  i:number;
  Evaluation:any[];
  constructor(private StudentAnswerServ:StudentAnswerService) { }

  ngOnInit(): void {
    //Get Student ID
    this.StudentId=Number(localStorage.getItem('token2'));
    //Get Student Evaluation In Exams
    this.StudentAnswerServ.GetExamsStudentAttended(this.StudentId).subscribe(
      (data)=>{
        this.StudentEvaluation=data;
        console.log(data);
        // for(this.i=0;this.i<this.StudentEvaluation.length;this.i++){
        //   this.Evaluation.push(this.StudentEvaluation.examName)
        //   this.Evaluation.push(this.StudentEvaluation.studentTotalGrade)
        // }
        // console.log(this.Evaluation)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}

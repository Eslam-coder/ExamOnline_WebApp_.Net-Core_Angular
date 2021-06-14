import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IQuestion } from 'src/app/Interfaces/IQuestion/iquestion';
import { QuestionsService } from 'src/app/Services/Questions/questions.service';

@Component({
  selector: 'app-questions-according-to-exam-id',
  templateUrl: './questions-according-to-exam-id.component.html',
  styleUrls: ['./questions-according-to-exam-id.component.css']
})
export class QuestionsAccordingToExamIDComponent implements OnInit {
ExamID:number;
QuestionsList:IQuestion[];
  constructor(private QuestionsServ:QuestionsService,
              private router:ActivatedRoute,
              private toastr:ToastrService,
              private route:Router) { }

  ngOnInit(): void {
    this.ExamID = this.router.snapshot.params['id'];
    this.QuestionsServ.GetAllQuestionAccordingToExamId(this.ExamID).subscribe(
      (data)=>{
        this.QuestionsList=data;
        console.log(data);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  //Delete Question According to QuestionID
  Delete(QuestionID:number){
    this.QuestionsServ.DeleteQuestion(QuestionID).subscribe(
      (data)=>{
        console.log(data)
        this.toastr.success('Question Deleted Successfully','congrats')
        this.route.navigateByUrl('Question/QuestionID')
      },
      (error)=>{
        console.log(error),
        this.toastr.error('Edit Exam Failed','Oops!')
      }
    )
  }
}

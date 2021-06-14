import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from 'src/app/Services/Questions/questions.service';

@Component({
  selector: 'app-question-by-id',
  templateUrl: './question-by-id.component.html',
  styleUrls: ['./question-by-id.component.css']
})
export class QuestionByIDComponent implements OnInit {
  QuestionID:number;
  Question:any;
  response: {dbPath: ''};
  constructor(private route:ActivatedRoute,
              private QuestionsServ:QuestionsService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    //Get Question ID from URL 
    this.QuestionID=this.route.snapshot.params['id'];
    //Get ExamByID Details
    this.QuestionsServ.GetQuestionById(this.QuestionID).subscribe(
      (data)=>{
        this.Question=data,
        console.log(this.Question)
      },
      (error)=>console.log(error)
    )
  }

  submit(f:NgForm){
    this.Question={
      questionID:this.Question.questionID,
      text:this.Question.text,
      modelAnswer:this.Question.modelAnswer,
      mark: this.Question.modelAnswer
    }
    console.log(this.Question)
    this.QuestionsServ.UpdateQuestion(this.QuestionID,this.Question).subscribe(
      (data)=>{
        console.log(data)
        this.toastr.success('Question Edited Successfully','congrats')
        this.router.navigateByUrl('Questions/QuestionID')
      },
      (error)=>{
        console.log(error),
        this.toastr.error('Edit Question Failed','Oops!')
      }
    )
  }
}

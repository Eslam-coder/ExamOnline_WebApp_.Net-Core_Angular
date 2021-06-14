import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from 'src/app/Services/Questions/questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  form:FormGroup;
  Question:any;
  QuestionExam:any;
  ExamID:number;
  LastQuestionFromDataBase:any;
  i:number;
  QuestionID:number;
  constructor(private QuestionsServ:QuestionsService , 
              private fb:FormBuilder,
              private Toaster:ToastrService,
              private http:HttpClient,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Reactive Form 
    this.form = this.fb.group({
      text:[''],
      modelAnswer:[''],
      mark:[''],
    })
  }

  onSubmit(){
    this.Question={
      text:this.form.get('text').value,
      modelAnswer: this.form.get('modelAnswer').value,
      mark: this.form.get('mark').value,
    }
    //debugger
    this.QuestionsServ.CreateQuestion(this.Question).subscribe(
      data=>{
        console.log(data)
        //Get Exam ID From URL 
        this.ExamID=this.route.snapshot.params['id'];
        this.LastQuestionFromDataBase=data;
        //Get Question ID From Last Question Added
        this.QuestionID=this.LastQuestionFromDataBase.questionID;
         this.QuestionExam={
           questionID:this.QuestionID,
           examID:this.ExamID
         }
        this.QuestionsServ.CreateQuestionExam(this.QuestionExam).subscribe(
             (data)=>{
               console.log(data);
               this.Toaster.success('New Question added successfully','Congurats')
               this.router.navigateByUrl('/Exams')
             },
             (error)=>{
               console.log(error)
               this.Toaster.error('Failed :(')
             }
           )
    },
    
      error=>{
        console.log(error)
        this.Toaster.error('Failed :(')
      }
    )
  }
}

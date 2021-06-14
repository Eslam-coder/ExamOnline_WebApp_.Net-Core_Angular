import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IExam } from 'src/app/Interfaces/IExam/iexam';
import { IQuestion } from 'src/app/Interfaces/IQuestion/iquestion';
import { IStudentAnswer } from 'src/app/Interfaces/IStudentAsnwer/istudent-answer';
import { ExamsService } from 'src/app/Services/Exams/exams.service';
import { QuestionsService } from 'src/app/Services/Questions/questions.service';
import { StudentAnswerService } from 'src/app/Services/StudentAnswers/student-answer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-exam-by-id',
  templateUrl: './exam-by-id.component.html',
  styleUrls: ['./exam-by-id.component.css']
})
export class ExamByIdComponent implements OnInit {
  ExamID:number;
  StudentID:number;
  ExamDetails:IExam;
  QuestionsList:IQuestion[];
  StudentAnswer:IStudentAnswer;
  i:number;
  HideNext:boolean=false;
  AppearFinish:boolean=true;
  NumberOfQuestions:number;
  StudentQuestionAnswer:any;
  //form:FormGroup;
  AnswersList:any;
  RightMarkImage:string;
  @ViewChild('Input') elm:ElementRef;
  constructor(private ExamsServ:ExamsService,
              private route:ActivatedRoute,
              private QuestionsServ:QuestionsService,
              private StudentAnswerServ:StudentAnswerService,
              private fb: FormBuilder,
              private Toastr:ToastrService,
              private modalService: NgbModal) {
            
    this.StudentAnswer={
        StudentID:null, 
        ExamID:null, 
        QuestionID:null,
        StudentQuestionAnswer:"", 
        studentTotalGrade:null 
      }
    this.RightMarkImage="assets/FinishExam/RightMark2.jpg"
  }

  ngOnInit(): void {
    //Get ExamID from Url 
    this.ExamID=this.route.snapshot.params['id']
    //console.log(this.ExamID)

    //GetExamById
    this.ExamsServ.GetExamById(this.ExamID).subscribe(
      (data)=>
      {
        this.ExamDetails = data
        //console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    //debugger
    //GetAllQuestionAccordingToExamId
    this.QuestionsServ.GetAllQuestionAccordingToExamId(this.ExamID).subscribe(
      (data)=>{
        this.QuestionsList=data;
        this.i=0;
        this.AnswersList=[];
        //console.log(data);
      },
      (error)=>{
        console.log(error)
      }
    )

    //Reactive Form 
    // this.form = this.fb.group({
    //   StudentQuestionAnswer:['', Validators.required],
    // })
  }

  GetNextQuestion(StudentQuestionAnswer:string,QuestionID:number){
    //debugger
    this.StudentAnswer={
      StudentID:Number(localStorage.getItem('token2')), 
      ExamID:this.route.snapshot.params['id'], 
      QuestionID:QuestionID,
      StudentQuestionAnswer:StudentQuestionAnswer, 
      studentTotalGrade:5 
    }
       // Adding Student Answer For Questions 
       this.StudentAnswerServ.PostStudentAnswer(this.StudentAnswer).subscribe(
        (data)=>{
          console.log(data)
    //GetAllQuestionAccordingToExamId
    this.QuestionsServ.GetAllQuestionAccordingToExamId(this.ExamID).subscribe(
      (data2)=>{
        debugger
        this.QuestionsList=data2;
        this.i++;
        this.StudentID=Number(localStorage.getItem('token2'));
        this.ExamID=this.route.snapshot.params['id']
        this.StudentAnswer={
          StudentID:this.StudentID, 
          ExamID:this.ExamID, 
          QuestionID:QuestionID,
          StudentQuestionAnswer:"",//StudentQuestionAnswer, 
          studentTotalGrade:5 
        }
        if(this.i< this.QuestionsList.length-1){
          //this.i++;
          this.HideNext=false;
          //this.AppearFinish=true;
        }
        else{
          this.NumberOfQuestions=this.QuestionsList.length-1;
          this.i=this.NumberOfQuestions;
          this.AppearFinish=false;
          this.HideNext=true;
        }
        //To Change Value in Input To Void and Replace Document.getElementById 
        this.elm.nativeElement.value="";
        //console.log(data);
      },
      (error2)=>{
        console.log(error2)
      }
    )
        },
        (error)=>{
          console.log(error)
        }
      )
  
  }

  PostAnswerforLastQuestion(StudentQuestionAnswer:string,QuestionID:number,content){
    console.log(QuestionID);
    //this.Toastr.success('Exam Finished','congurats')
    this.modalService.open(content, { centered: true });
    this.StudentID=Number(localStorage.getItem('token2'));
        this.ExamID=this.route.snapshot.params['id']
        this.StudentAnswer={
          StudentID:this.StudentID, 
          ExamID:this.ExamID, 
          QuestionID:QuestionID,
          StudentQuestionAnswer:StudentQuestionAnswer, 
          studentTotalGrade:5 
        }
    //Adding Student Answer For Questions 
    this.StudentAnswerServ.PostStudentAnswer(this.StudentAnswer).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}

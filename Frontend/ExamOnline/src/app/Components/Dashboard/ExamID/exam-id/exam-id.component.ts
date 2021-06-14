import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamsService } from 'src/app/Services/Exams/exams.service';

@Component({
  selector: 'app-exam-id',
  templateUrl: './exam-id.component.html',
  styleUrls: ['./exam-id.component.css']
})
export class ExamIDComponent implements OnInit {
  ExamID:number;
  Exam:any;
  response: {dbPath: ''};
  constructor(private route:ActivatedRoute,
              private ExamsServ:ExamsService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    //Get Exam ID from URL 
    this.ExamID=this.route.snapshot.params['id'];
    //Get ExamByID Details
    this.ExamsServ.GetExamById(this.ExamID).subscribe(
      (data)=>{
        this.Exam=data,
        console.log(this.Exam)
      },
      (error)=>console.log(error)
    )
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44354/${serverPath}`;
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  submit(f:NgForm){
    this.Exam={
      examName:this.Exam.examName,
      totalMark:this.Exam.totalMark,
      examImage: this.response.dbPath
    }
    console.log(this.Exam)
    this.ExamsServ.UpdateExam(this.ExamID,this.Exam).subscribe(
      (data)=>{
        console.log(data)
        this.toastr.success('Exam Edited Successfully','congrats')
        this.router.navigateByUrl('Exams')
      },
      (error)=>{
        console.log(error),
        this.toastr.error('Edit Exam Failed','Oops!')
      }
    )
  }

}

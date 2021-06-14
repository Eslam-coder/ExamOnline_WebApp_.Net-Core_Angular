import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IExam } from 'src/app/Interfaces/IExam/iexam';
import { ExamsService } from 'src/app/Services/Exams/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
AllExams:IExam[];
  constructor(private ExamsServ:ExamsService,
              private Toastr:ToastrService,
              private router:Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ExamsServ.GetAllExams().subscribe(
      (data)=>{
        console.log(data);
        this.AllExams=data;
      },
      (error)=>{
        console.log(error);
      }
    )

  }

  //Update Exam 
  Edit(ExamID:number,ExamUpdated){
    this.ExamsServ.UpdateExam(ExamID,ExamUpdated).subscribe(
      (data)=>{
        console.log(data);
        this.Toastr.success('Exam Edited Successfully')
        this.router.navigateByUrl('/Exams')
      },
      (error)=>{
        console.log(error);
        this.Toastr.error('Failed :(')
      }
    )
  }
  
 //Delete Exam 
 Delete(ExamID:number){
    this.ExamsServ.DeleteExam(ExamID).subscribe(
      (data)=>{
        console.log(data);
        this.Toastr.success('Exam Deleted Successfully')
      },
      (error)=>{
        console.log(error);
        this.Toastr.error('Failed :(')
      }
    )
  }
  //Get Exam Details
  GetById(ExamID:number){
    this.ExamsServ.GetExamById(ExamID).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //To Get Image of Every Exam 
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44354/${serverPath}`;
  }
}

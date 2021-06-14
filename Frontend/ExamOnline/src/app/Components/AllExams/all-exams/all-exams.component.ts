import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExam } from 'src/app/Interfaces/IExam/iexam';
import { ExamsService } from 'src/app/Services/Exams/exams.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-all-exams',
  templateUrl: './all-exams.component.html',
  styleUrls: ['./all-exams.component.css']
})
export class AllExamsComponent implements OnInit {
AllExams:IExam[];
StudentID:string;
  constructor(private ExamsServ:ExamsService,
              private route:Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ExamsServ.GetAllExams().subscribe(
      (data)=>
      {
        this.AllExams=data;
        //console.log(data)
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44354/${serverPath}`;
  }

  GoToExamByID(ExamID:number,content){
    //debugger
    //Check User Login Or Not 
    if(localStorage.getItem('token2')){
      true;
      this.route.navigateByUrl(`ExamById/${ExamID}`);
    }
    else{
      this.modalService.open(content, { centered: true });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamsService } from 'src/app/Services/Exams/exams.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  form:FormGroup;
  Exam:any;
  response: {dbPath: ''};
  constructor(private ExamsServ:ExamsService , 
              private fb:FormBuilder,
              private Toaster:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    //Reactive Form 
    this.form = this.fb.group({
      examName:[''],
      examImage:[''],
      totalMark:['']
    })
  }

  uploadFinished = (event) => {
    this.response = event;
  }

  onSubmit(){
    this.Exam={
      examName:this.form.get('examName').value,
      examImage: this.response.dbPath,
      totalMark: this.form.get('totalMark').value,
    }
    //debugger
    this.ExamsServ.CreateExam(this.Exam).subscribe(
      (data)=>{
        console.log(data)
        this.Toaster.success('New Exam added successfully','Congurats')
        this.router.navigateByUrl('/Exams')
    },
    
      (error)=>{
        console.log(error)
        this.Toaster.error('Failed :(')
      }
    )
  }
  
}

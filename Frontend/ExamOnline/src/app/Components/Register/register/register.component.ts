import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from 'src/app/Services/Register/register.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
RegisterImage:string;
UserDetails:any;
user:any;
  constructor(private RegisterServ:RegisterService,
              private route:Router,
              private toastr:ToastrService) { 
    this.RegisterImage='assets/Register/RegisterImage3.jpg'
    this.user={
      FName:"",
      LName:"",
      Email:"",
      Password:""
    }
  }

  ngOnInit(): void {
    
  }

  onSubmit(f:NgForm){
    this.RegisterServ.Register(this.user).subscribe(
      (data)=>{
        console.log(data);
        this.UserDetails=data;
        console.log('Register Successfully');
        //Put userName in LocalStorage
        localStorage.setItem('token',this.UserDetails.studentEmail)
        //Put userID in LocalStorage
        localStorage.setItem('token2',this.UserDetails.studentID)
        //appear notification to success register
        this.toastr.success("Register Successfully","Congratulation")
        //Return user to HomeComponent
        this.route.navigateByUrl('Home')
      },
      (error)=>{
        console.log("register Failed");
        //appear notification to failed register 
        this.toastr.error("Complete Your Data","Unfortunality")
        
      }
    )
  }
  
}

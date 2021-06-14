import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/Services/Login/login.service';
import {Toast, ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any;
AppearLoginSuccessfully:Boolean=true;
UserDetails:any;
  constructor(private LoginServ:LoginService,
    private Toaster :ToastrService,
    private route:Router) { 
    this.user={
      Email:"",
      Password:""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    //debugger
    this.LoginServ.Login(this.user).subscribe(
      (data)=>{
        this.UserDetails=data;
        console.log(data);
        console.log("Login success")
        //Put userName in LocalStorage
        localStorage.setItem('token',this.user.Email)
        //Put userID in LocalStorage
        localStorage.setItem('token2',this.UserDetails.studentId)
        //Appear Toaster Success
         this.Toaster.success("Login Successfully","Congurats")
         //add router navigate 
         this.route.navigateByUrl('Home');
      },
      (error)=>{
        console.log("Login fail")
         //Appear Toaster Success
        this.Toaster.error("There is no account registered with that email. Please enter a registered email or continue to Create an account","Welcome")
        //Return To RegisterComponent to Register 
        this.route.navigateByUrl('Register');
      }
    )
     
  }
}

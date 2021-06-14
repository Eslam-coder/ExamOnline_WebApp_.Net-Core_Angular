import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  RegisterImage:string;
  UserDetails:any;
  user:any;
  constructor(private UserServ:UserService,
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
    this.UserServ.CreateUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        this.UserDetails=data;
        console.log('User Added Successfully');
        //appear notification to success register
        this.toastr.success("User Added Successfully","Congratulation")
        //Return user to AllUsersComponent
        this.route.navigateByUrl('AllUsers')
      },
      (error)=>{
        console.log(error);
        //appear notification to failed register 
        this.toastr.error("Failed","Unfortunality")
      }
    )
  }
}

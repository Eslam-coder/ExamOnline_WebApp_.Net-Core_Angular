import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/Interfaces/IUser/iuser';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
AllUsers:IUser[];
response:boolean;
  constructor(private UserServ:UserService,
              private Toaster :ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.UserServ.GetAllUsers().subscribe(
      (data)=>{
        console.log(data);
        this.AllUsers=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //Delete User or Student
  Delete(studentID:number){
    //debugger
    this.response = confirm('Are you Sure TO Delete User?')
    if(this.response==true){
      this.UserServ.DeleteStudent(studentID).subscribe(
        (data)=>{
          console.log(data);
          this.Toaster.success('User Deleted Successfully','Done');
          this.router.navigateByUrl('AllUsers')
        },
        (error)=>{
          console.log(error);
          this.Toaster.error('Failed :(')
        }
      )
    }
   else{
     this.router.navigateByUrl('AllUsers')
   }
  }

}

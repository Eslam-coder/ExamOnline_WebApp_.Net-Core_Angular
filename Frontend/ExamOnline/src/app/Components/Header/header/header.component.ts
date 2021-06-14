import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/AuthService/auth-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserName:string;
  appearAdmin:Boolean=true;
  constructor(private AuthServ:AuthServiceService,
              private LoginServ:LoginService,
              private route:Router,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  isLogged(){
    this.UserName = localStorage.getItem('token')
    //Show & Hide Dashboard in dropdownlist
    if(localStorage.getItem('token')=='Admin'||localStorage.getItem('token')=='admin@admin.com')
    {
        this.appearAdmin = false;
    }
    else{
      this.appearAdmin = true;
    }
   // console.log(this.UserEamil);
    return this.AuthServ.isLoggedIn;
    
  }

  logOut(){
       localStorage.removeItem('token');
       localStorage.removeItem('token2');
       this.toastr.success('GoodBye');
       this.route.navigateByUrl('Home');
  }

  logout(){
    //debugger
    this.LoginServ.Logout().subscribe(
      data=>{
        console.log(data)
        localStorage.removeItem('token')
       localStorage.removeItem('token2');
        this.toastr.success('GoodBye')
        this.route.navigateByUrl('Home')
      },
      error=>{
        console.log(error)
      }
    )
  }


}

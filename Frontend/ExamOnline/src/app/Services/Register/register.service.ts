import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/Interfaces/IUser/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  Register(user:IUser){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post<IUser>(`${environment.ApiUrl}/Account/Register`,user,httpOptions)
  }
}

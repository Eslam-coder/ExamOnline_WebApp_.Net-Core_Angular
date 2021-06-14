import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 GetAllUsers():Observable<IUser[]>{
   return this.http.get<IUser[]>(`${environment.ApiUrl}/api/Student/GetAllStudents`);

 }

 DeleteStudent(StudentID:number):Observable<IUser>{
   return this.http.delete<IUser>(`${environment.ApiUrl}/api/Student/DeleteStudent?ID=`+`${StudentID}`);
 }

 CreateUser(NewUser:any){
  const httpOptions ={headers:new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
    })};
  return this.http.post(`${environment.ApiUrl}/api/Student/CreateStudent`,NewUser,httpOptions)
}
 
}

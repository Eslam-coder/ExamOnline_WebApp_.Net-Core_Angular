import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentAnswer } from 'src/app/Interfaces/IStudentAsnwer/istudent-answer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentAnswerService {

  constructor(private http:HttpClient) { }

  //Adding Student Answer for Questions 
  PostStudentAnswer(StudentAnswer:IStudentAnswer):Observable<IStudentAnswer>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
      return this.http.post<IStudentAnswer>('https://localhost:44354/api/StudentAnswersQuestions/PostStudentAnswerForQuestion',StudentAnswer,httpOptions);
     // return this.http.post<IStudentAnswer>(`${environment.ApiUrl}/api/StudentAnswersQuestions/PostStudentAnswerForQuestion`,StudentAnswer,httpOptions)
  }

  //GetStudentAnswersByExamID
  GetStudentAnswersByExamID(StudentId:number,ExamId:number):Observable<IStudentAnswer[]>{
    return this.http.get<IStudentAnswer[]>(`${environment.ApiUrl}/api/StudentAnswersQuestions/GetStudentAnswersByExamID?StudentId=`+`${StudentId}`+`&&ExamId=`+`${ExamId}`);
  }

   //GetExamsStudentAttendedAndGrades
   GetExamsStudentAttended(StudentId:number){
    return this.http.get(`${environment.ApiUrl}/api/StudentAnswersQuestions/GetExamsStudentAttended2?StudentId=`+`${StudentId}`);
  }
  

}

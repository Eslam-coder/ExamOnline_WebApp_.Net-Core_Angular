import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExam } from 'src/app/Interfaces/IExam/iexam';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private http:HttpClient) { }

  GetAllExams():Observable<IExam[]>{
    return this.http.get<IExam[]>(`${environment.ApiUrl}/api/Exam/GetAllExams`);
  }
  GetExamById(ExamID:number):Observable<IExam>{
    return this.http.get<IExam>(`${environment.ApiUrl}/api/Exam/GetExamById/?ID=`+`${ExamID}`);
  }

  UpdateExam(ExamID:number,ExamUpdated:any){
    return this.http.put(`${environment.ApiUrl}/api/Exam/EditExam?ID=`+`${ExamID}`,ExamUpdated);
  }

  DeleteExam(ExamID:number):Observable<IExam>{
    return this.http.delete<IExam>(`${environment.ApiUrl}/api/Exam/DeleteExam?ID=`+`${ExamID}`);
  }

  CreateExam(NewExam:IExam):Observable<IExam>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post<IExam>(`${environment.ApiUrl}/api/Exam/CreateExam`,NewExam,httpOptions)
  }
  
}

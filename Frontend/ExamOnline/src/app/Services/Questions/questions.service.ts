import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/Interfaces/IQuestion/iquestion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  GetAllQuestionAccordingToExamId(ExamID:number):Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(`${environment.ApiUrl}/api/Question/GetAllQuestionAccordingToExamId?ID=`+`${ExamID}`)
  }

  GetAllQuestion():Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(`${environment.ApiUrl}/api/Question/GetAllQuestions`)
  }

  DeleteQuestion(QuestionID:number):Observable<IQuestion>{
    return this.http.delete<IQuestion>(`${environment.ApiUrl}/api/Question/DeleteQuestion?ID=`+`${QuestionID}`);
  }

  GetQuestionById(QuestionID:number):Observable<IQuestion>{
    return this.http.get<IQuestion>(`${environment.ApiUrl}/api/Question/GetQuestionById/?ID=`+`${QuestionID}`);
  }

  UpdateQuestion(QuestionID:number,QuestionUpdated:any){
    return this.http.put(`${environment.ApiUrl}/api/Question/EditQuestion?ID=`+`${QuestionID}`,QuestionUpdated);
  }

  CreateQuestion(NewQuestion:any){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post(`${environment.ApiUrl}/api/Question/CreateQuestion`,NewQuestion,httpOptions)
  }

  CreateQuestionExam(NewQuestionExam:any){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post(`${environment.ApiUrl}/api/QuestionExam/CreateQuestion`,NewQuestionExam,httpOptions)
  }

}

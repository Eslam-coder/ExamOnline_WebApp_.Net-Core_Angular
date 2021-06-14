import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/Login/login/login.component';
import { AllExamsComponent } from './Components/AllExams/all-exams/all-exams.component';
import { UploadComponent } from './Components/Upload/upload/upload.component';
import { ExamByIdComponent } from './Components/ExamById/exam-by-id/exam-by-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StudentAnswerReviewComponent } from './Components/StudentAnswerReview/student-answer-review/student-answer-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './Components/Dashboard/Users/users/users.component';
import { ExamsComponent } from './Components/Dashboard/Exams/exams/exams.component';
import { ExamIDComponent } from './Components/Dashboard/ExamID/exam-id/exam-id.component';
import { AdminPanelComponent } from './Components/Dashboard/AdminPanel/admin-panel/admin-panel.component';
import { QuestionsAccordingToExamIDComponent } from './Components/Dashboard/QuestionsAccordingToExamID/questions-according-to-exam-id/questions-according-to-exam-id.component';
import { QuestionByIDComponent } from './Components/Dashboard/QuestionByID/question-by-id/question-by-id.component';
import { AddQuestionComponent } from './Components/Dashboard/AddQuestion/add-question/add-question.component';
import { AddExamComponent } from './Components/Dashboard/AddExam/add-exam/add-exam.component';
import { AuthGuradService } from './Services/AuthGurad/auth-gurad.service';
import { AddUserComponent } from './Components/Dashboard/AddUser/add-user/add-user.component';
import { StudentEvaluationComponent } from './Components/StudentEvaluation/student-evaluation/student-evaluation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AllExamsComponent,
    ExamsComponent,
    UploadComponent,
    ExamByIdComponent,
    StudentAnswerReviewComponent,
    UsersComponent,
    ExamIDComponent,
    AdminPanelComponent,
    QuestionsAccordingToExamIDComponent,
    QuestionByIDComponent,
    AddQuestionComponent,
    AddExamComponent,
    AddUserComponent,
    StudentEvaluationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), NgbModule, // ToastrModule added
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuradService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

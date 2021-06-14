import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllExamsComponent } from './Components/AllExams/all-exams/all-exams.component';
import { AddExamComponent } from './Components/Dashboard/AddExam/add-exam/add-exam.component';
import { AddQuestionComponent } from './Components/Dashboard/AddQuestion/add-question/add-question.component';
import { AddUserComponent } from './Components/Dashboard/AddUser/add-user/add-user.component';
import { AdminPanelComponent } from './Components/Dashboard/AdminPanel/admin-panel/admin-panel.component';
import { ExamIDComponent } from './Components/Dashboard/ExamID/exam-id/exam-id.component';
import { ExamsComponent } from './Components/Dashboard/Exams/exams/exams.component';
import { QuestionByIDComponent } from './Components/Dashboard/QuestionByID/question-by-id/question-by-id.component';
import { QuestionsAccordingToExamIDComponent } from './Components/Dashboard/QuestionsAccordingToExamID/questions-according-to-exam-id/questions-according-to-exam-id.component';
import { UsersComponent } from './Components/Dashboard/Users/users/users.component';
import { ExamByIdComponent } from './Components/ExamById/exam-by-id/exam-by-id.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { StudentAnswerReviewComponent } from './Components/StudentAnswerReview/student-answer-review/student-answer-review.component';
import { StudentEvaluationComponent } from './Components/StudentEvaluation/student-evaluation/student-evaluation.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'AllExams',component:AllExamsComponent},
  {path:'ExamById/:id',component:ExamByIdComponent},
  {path:'AnswerReview/:id',component:StudentAnswerReviewComponent},
  {path:'AllUsers',component:UsersComponent},
  {path:'Exams',component:ExamsComponent},
  {path:'Exam/:id',component:ExamIDComponent},
  {path:'Dashboard',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'Questions/:id',component:QuestionsAccordingToExamIDComponent},
  {path:'QuestionDetails/:id',component:QuestionByIDComponent},
  {path:'AddQuestion/:id',component:AddQuestionComponent},
  {path:'AddExam',component:AddExamComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'Evaluation',component:StudentEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

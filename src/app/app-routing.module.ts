import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursePracticalsComponent } from './course/course-practicals/course-practicals.component';
import { CreateExamComponent } from './exam/create-exam/create-exam.component';
import { PracticalAddRateComponent } from './course/practical-add-rate/practical-add-rate.component';
import { PracticalAddCommentComponent } from './course/practical-add-comment/practical-add-comment.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'mod', component: ModeratorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'course-practicals', component: CoursePracticalsComponent },
  { path: 'create-exam', component: CreateExamComponent },
  { path: 'practical-add-rate', component: PracticalAddRateComponent },
  { path: 'practical-add-comment', component: PracticalAddCommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

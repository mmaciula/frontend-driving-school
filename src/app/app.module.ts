import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { UserComponent } from './user/user.component';
import { InterceptorProviders } from './auth/error.interceptor';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { ToastrModule } from 'ngx-toastr';
import { UserCoursesComponent } from './course/user-courses/user-courses/user-courses.component';
import { CoursePracticalsComponent } from './course/course-practicals/course-practicals.component';
import { ExamComponent } from './exam/exam/exam.component';
import { CreateExamComponent } from './exam/create-exam/create-exam.component';
import { InstructorCoursePracticalsComponent } from './course/instructor-course-practicals/instructor-course-practicals.component';
import { PracticalAddRateComponent } from './course/practical-add-rate/practical-add-rate.component';
import { PracticalAddCommentComponent } from './course/practical-add-comment/practical-add-comment.component';
import { CreateCoursePracticalComponent } from './course/create-course-practical/create-course-practical.component';
import { InstructorExamComponent } from './exam/instructor-exam/instructor-exam.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { DialogComponent } from './admin/dialog/dialog.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { RoleDialogComponent } from './admin/role-dialog/role-dialog.component';
import { SignInForCourseDialogComponent } from './course/sign-in-for-course-dialog/sign-in-for-course-dialog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    ModeratorComponent,
    UserComponent,
    ImageSliderComponent,
    CoursesListComponent,
    UserCoursesComponent,
    CoursePracticalsComponent,
    ExamComponent,
    CreateExamComponent,
    InstructorCoursePracticalsComponent,
    PracticalAddRateComponent,
    PracticalAddCommentComponent,
    CreateCoursePracticalComponent,
    InstructorExamComponent,
    AdminCourseComponent,
    DialogComponent,
    AdminUsersComponent,
    RoleDialogComponent,
    SignInForCourseDialogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [
    InterceptorProviders,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent,
    RoleDialogComponent,
    SignInForCourseDialogComponent
  ]
})
export class AppModule { }

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
import { MatIconModule, MatCardModule, MatListModule, MatTabsModule, MatTableModule, MatSortModule,
  MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { ToastrModule } from 'ngx-toastr';
import { UserCoursesComponent } from './course/user-courses/user-courses/user-courses.component';
import { CoursePracticalsComponent } from './course/course-practicals/course-practicals.component';

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
    CoursePracticalsComponent
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
    ToastrModule.forRoot()
  ],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

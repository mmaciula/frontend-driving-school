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
import { MatIconModule, MatCardModule, MatListModule } from '@angular/material';

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
    ImageSliderComponent
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
    MatListModule
  ],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

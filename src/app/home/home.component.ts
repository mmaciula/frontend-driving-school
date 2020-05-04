import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  publicContent: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => { this.publicContent = data; },
      errorMessage => { this.publicContent = JSON.parse(errorMessage.error).message; }
    );
  }

}

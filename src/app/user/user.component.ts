import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userContent = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserContent().subscribe(data => { this.userContent = data; },
      errorMessage => { this.userContent = JSON.parse(errorMessage.error).message; });
  }

}

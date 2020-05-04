import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent implements OnInit {
  modContent = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getModContent().subscribe(
      data => { this.modContent = data; },
      errorMessage => { this.modContent = JSON.parse(errorMessage.error).message; }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminContent: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminContent().subscribe(
      data => { this.adminContent = data; },
      errorMessage => { this.adminContent = JSON.parse(errorMessage.error).message; }
    );
  }

}

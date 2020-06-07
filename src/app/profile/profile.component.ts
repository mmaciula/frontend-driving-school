import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loggedUser: any;
  user = 'ROLE_USER';
  instructor = 'ROLE_MODERATOR';
  admin = 'ROLE_ADMIN';

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.loggedUser = this.tokenStorage.getUser();
  }

}

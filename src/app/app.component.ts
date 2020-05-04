import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Super Jazda';
  username: string;
  isLoggedIn = false;
  isAdmin = false;
  isMod = false;
  roles: string[];

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.username = user.username;
      this.roles = user.roles;
      this.isMod = this.roles.includes('ROLE_MODERATOR');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

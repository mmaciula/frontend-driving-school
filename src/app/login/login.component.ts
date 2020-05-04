import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles: string[] = [];
  isLogged = false;
  failed = false;
  errorMessage = '';
  form: any = {};

  constructor(private tokenStorage: TokenStorageService, private auth: AuthService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.auth.signIn(this.form).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLogged = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
      }, err => {
        this.failed = true;
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}

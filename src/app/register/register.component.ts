import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  success = false;
  failed = false;
  form: any = {};
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.form).subscribe(data => {
        this.success = true;
        setTimeout(
          () => {
            this.router.navigate(['/']);
          }, 500
        );
      },
      errorMsg => {
        this.failed = true;
        this.errorMessage = errorMsg.error.message;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: any = {};

  constructor(private contact: ContactService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.contact.sendMessage(this.form).subscribe(
      () => {
        this.toastr.success('Wkrótce na nią odpowiemy', 'Twoja wiadomość została wysłana', {
          positionClass: 'toast-top-center'
        });

        setTimeout(
          () => {
            this.router.navigate(['/']);
          }, 1000
        );
      }
    );
  }

}

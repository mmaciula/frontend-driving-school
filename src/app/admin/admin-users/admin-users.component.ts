import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/service/user.service';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['name', 'username', 'role', 'action'];
  users = new MatTableDataSource<any>();
  role;

  constructor(private userService: UserService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit() {
    this.users.sort = this.sort;
    this.users.paginator = this.paginator;
    this.getAllUsers();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users.data = data;
        console.log('Successfully load all users');
      }
    );
  }

  openDialog(username) {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.backdropClass = 'backdropBackground';

    const dialogRef = this.dialog.open(RoleDialogComponent, config);

    dialogRef.afterClosed().subscribe(
      roleFromForm => {
        console.log(roleFromForm);
        this.role = roleFromForm;
        if (this.role === 'instruktor') {
          this.userService.assignRoleToUser('ROLE_MODERATOR', username).subscribe(
            () => {
              this.toastr.success('', 'Zmieniono role użytkonikowi ' + username, {
                positionClass: 'toast-top-center'
              });

              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          );
        } else if (this.role === 'admin') {
          this.userService.assignRoleToUser('ROLE_ADMIN', username).subscribe(
            () => {
              this.toastr.success('', 'Zmieniono role użytkonikowi ' + username, {
                positionClass: 'toast-top-center'
              });

              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          );
        } else {
          this.toastr.error('Upewnij się, że podano prawidłową rolę', 'Coś poszło nie tak', {
            positionClass: 'toast-top-center'
          });
        }
      }
    );
  }

}

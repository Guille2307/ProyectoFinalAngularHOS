import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ApiServiceService } from '../services/Api/api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  currentUser?: any;
  currentUserEmail: string | null = localStorage.getItem('currentUser');

  constructor(
    public userService: UserService,
    private apiServiceService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  public getCurrentUser() {
    this.apiServiceService
      .getUser()
      .pipe(map((users: any) => users.user))
      .subscribe((users: any) => {
        const user = users.filter(
          (user: any) => user._id === this.userService.currentUser
        );

        if (user) {
          this.currentUser = user[0].email;
          localStorage.setItem('currentUser', this.currentUser);
        }
      });
  }
}

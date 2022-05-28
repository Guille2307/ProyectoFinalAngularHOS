import { ApiServiceService } from './../services/Api/api-service.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedRoute?: string;
  public loginClicks: boolean = true;
  constructor(
    private router: Router,
    private apiServiceService: ApiServiceService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedRoute = event.url.split('/')[1];
      }
    });
  }
  public login() {
    if (this.userService.isloggedIn()) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

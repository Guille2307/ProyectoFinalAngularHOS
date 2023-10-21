import { ApiServiceService } from './../services/Api/api-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedRoute?: string;
  public loginClicks: boolean = true;

  constructor(private router: Router, public userService: UserService) {}

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
    }
    if (localStorage.getItem('access_token')) {
      Swal.fire('You are logged in', '', 'info');
    }
  }
  public logout() {
    this.userService.logout();
    Swal.fire('You are logout', '', 'success');
    return this.router.navigate(['login']);
  }
}

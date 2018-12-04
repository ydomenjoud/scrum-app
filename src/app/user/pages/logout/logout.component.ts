import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent {
  constructor(private userService: UserService, private router: Router) {
  }


  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}

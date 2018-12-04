import { Component, OnInit } from '@angular/core';
import { Credentials, UserService } from 'src/app/user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  credentials = new Credentials();

  error: { message, code } = null;

  constructor(private userService: UserService, private router: Router) {
  }

  logout() {
    this.userService.logout();
  }

  login() {
    this.error = null;
    this.userService
      .login$(this.credentials)
      .subscribe(
        (user) => {
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          this.error = error;
        }
      );
  }

  ngOnInit() {
  }

}

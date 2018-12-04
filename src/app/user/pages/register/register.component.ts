import { Component, OnInit } from '@angular/core';
import { Credentials, UserService } from 'src/app/user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  credentials = new Credentials();

  error: { message, code } = null;

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  register() {
    this.userService
      .register$(this.credentials)
      .subscribe(
        (next) => {
          this.router.navigateByUrl('/auth/login');
        },
        (error) => {
          this.error = error;
        }
      );
  }

  ngOnInit() {
  }

}

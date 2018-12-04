import { Component } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  user: User = null;

  constructor(private userService: UserService) {
    // for always
    this.userService.user$.subscribe(
      user => {
        this.user = user;
      }
    );
  }
}

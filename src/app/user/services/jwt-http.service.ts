import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';

// http://stackoverflow.com/questions/39767019/app-initializer-raises-cannot-instantiate-cyclic-dependency-applicationref-w

@Injectable()
export class JWTHttpInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  /**
   * Intercept the request that is going to be send and add the user's token
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.token}`,
        Accept: 'application/json'
      }
    });

    return next.handle(request);
  }

}

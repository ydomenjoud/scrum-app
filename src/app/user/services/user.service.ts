import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/models/user';
import { BehaviorSubject, throwError } from 'rxjs';

export class Credentials {
  email: string;
  password: string;
}

export class Token {
  id: string;
  createdAt: string;
  ttl: number;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public token: Token;

  private url = `${environment.apiUrl}users/`;

  constructor(private http: HttpClient) {
  }

  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  get user$() {
    return this._user$;
  }

  get user(): User {
    return this._user$.getValue();
  }

  logout() {
    this._user$.next(null);
  }

  register$(credentials: Credentials) {
    return this.http.post(this.url, credentials).pipe(
      catchError(err => {
        // get nested error
        return throwError(err.error ? err.error.error : {code: 'error', message: 'error occurred'});
      })
    );
  }

  login$(credentials: Credentials) {

    return this.http
      .post<Token>(this.url + 'login', credentials)
      .pipe(
        switchMap((token: Token) => {
          this.token = token;

          // const headers: HttpHeaders = new HttpHeaders();
          // headers.set('Authorization', token.id);

          return this.http.get<User>(this.url + token.userId);
        }),
        catchError(err => {
          // get nested error
          return throwError(err.error ? err.error.error : {code: 'error', message: 'error occurred'});
        }),
        tap(user => {
          this._user$.next(user);
        })
      );

  }
}

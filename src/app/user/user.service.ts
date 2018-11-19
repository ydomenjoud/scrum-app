import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login$(credentials: { email: string, password: string }) {
      return this.http.post('plop/login', {email: '', password: ''});
  }
}

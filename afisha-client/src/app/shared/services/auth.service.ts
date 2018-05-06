import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IToken} from "../models/token.model";

@Injectable()
export class AuthService {

  user: Object;
  TOKEN_KEY='token';

  constructor(private http: HttpClient) { }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  registerUser(registerValues){
    return this.http.post<IToken>(environment.apiUrl + 'register', registerValues)
      .subscribe(
        (token) => { localStorage.setItem(this.TOKEN_KEY, token.token) },
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  loginUser(loginValues){
    return this.http.post<IToken>(environment.apiUrl + 'login', loginValues)
      .subscribe(
        (token) => { localStorage.setItem(this.TOKEN_KEY, token.token) },
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  logoutUser(){
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

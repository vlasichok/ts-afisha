import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IToken} from "../models/token.model";
import {IUser} from "../models/user.model";

@Injectable()
export class AuthService {

  user: IUser;
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient) { }

  get token(): string{
    console.log(this.TOKEN_KEY);
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(): boolean{
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  registerUser(registerValues: IUser){
    return this.http.post<IToken>(environment.apiUrl + 'register', registerValues)
      .subscribe(
        (token) => { localStorage.setItem(this.TOKEN_KEY, token.token) },
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  loginUser(loginValues: IUser){
    return this.http.post<IToken>(environment.apiUrl + 'login', loginValues)
      .subscribe(
        (token) => { localStorage.setItem(this.TOKEN_KEY, token.token) },
        (error: HttpErrorResponse) => console.log(error)
      );
  }

  logoutUser(): void{
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

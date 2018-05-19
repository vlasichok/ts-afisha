import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IToken} from "../models/token.model";
import {IUser} from "../models/user.model";

@Injectable()
export class AuthService {

  user: IUser;
  static readonly TOKEN_KEY = 'token';

  constructor(private http: HttpClient) { }

  static get token(): string{
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  get isAuthenticated(): boolean{
    const isExist = !!localStorage.getItem(AuthService.TOKEN_KEY);
    if(!isExist){
      return false;
    }
    const tokenParts = localStorage.getItem(AuthService.TOKEN_KEY).split('.');
    if(tokenParts.length !== 3) {
      return false;
    }
    return true;
  }

  registerUser(registerValues: IUser){
    return this.http.post<IToken>(environment.apiUrl + 'register', registerValues);
  }

  loginUser(loginValues: IUser){
    return this.http.post<IToken>(environment.apiUrl + 'login', loginValues);
  }

  logoutUser(): void{
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }
}

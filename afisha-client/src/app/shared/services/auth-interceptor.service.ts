import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'bearerToken ' + AuthService.token)
    });
    return next.handle(authRequest);
  }

}

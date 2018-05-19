import { Injectable, Injector } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const auth = this.injector.get(AuthService);
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'bearerToken ' + auth['token'])
    });
    return next.handle(authRequest);
  }

}

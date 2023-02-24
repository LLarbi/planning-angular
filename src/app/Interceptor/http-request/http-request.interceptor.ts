import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../../services/session-storage/session-storage.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private  sessionStorage: SessionStorageService
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage['getUser'].token}`,
      },
    });

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];

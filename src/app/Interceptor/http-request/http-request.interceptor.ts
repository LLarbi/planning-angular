import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
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
    const token: object | undefined = this.sessionStorage.getUser().token

    if (req.url.startsWith('http://localhost:8080') && token != undefined) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(req);
  }
}

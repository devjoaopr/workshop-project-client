import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.sessionService.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}

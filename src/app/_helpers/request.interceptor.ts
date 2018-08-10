
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const data = JSON.parse(localStorage.getItem('gTdhs%HJ324SDgd'));
    //console.log(data);
    if (data) {
      request = request.clone({
        setHeaders: {
        }
      });
    }
    return next.handle(request);
  }
}

export const RequestInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: RequestInterceptor,
  multi: true
};

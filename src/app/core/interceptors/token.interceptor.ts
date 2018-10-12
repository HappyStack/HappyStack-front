import { Injectable, Inject, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return 
  }
}

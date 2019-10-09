import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from './login.service';

/**
 * Cette classe va intercepter les requêtes Http
 * et inclure le jwt dans le header, si il existe
 */
@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    authService: any;
    

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    if (localStorage.getItem('jwt')) {
      if (request.url.includes("localhost") || request.url.includes("127.0.0.1")){
        request = this.addToken(request, localStorage.getItem('jwt'));
      }
      }

    return next.handle(request);
       /* .pipe(catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
            console.log('error interceptor')
          return throwError(error);
        }
      }));*/
    }

    private addToken(request: HttpRequest<any>, token: string) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }
}

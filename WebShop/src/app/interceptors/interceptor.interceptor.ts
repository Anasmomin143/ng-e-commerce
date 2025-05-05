// app.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoadingService } from './../services/loading.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    this.loadingService.show();

    return next.handle(authReq).pipe(
      tap((event) => console.log('HTTP Response:', event)),
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.loadingService.hide(); // Stop loader
      })
    );
  }
}

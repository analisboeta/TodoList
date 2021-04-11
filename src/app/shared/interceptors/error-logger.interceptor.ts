import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorLoggerInterceptor implements HttpInterceptor {
  /**
   *
   * @param req - o pedido
   * @param next - o proximo interceptor na corrente de processamento. a order vai estar no appmodule
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**

     */
    return next.handle(req).pipe(catchError((err) => {
      console.error('ERROR CAUGHT - ', err);
      return throwError(err);
    }));
  }
}

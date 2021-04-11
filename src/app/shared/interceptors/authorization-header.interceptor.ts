import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
  /**
   * This works similarly to a pipe - you take the request that came from the previous interceptor and you will send it forward to
   * the next interceptor.
   * The idea is to save it, evaluate if it supposed to be intercepted or not (see skipInterceptor below) and if it is, process the
   * request, save it as a processedClone (with some differences) and send if forward in the chain.
   *
   * The way this works, as a way to organize your ideas around this, is to associate an interceptor to the Chain of Responsibility.
   * Typical use cases are - Catching errors ( https://rxjs-dev.firebaseapp.com/api/operators/catchError) checking if a user is logged
   * with the appropriate authorization header (oauth tokens for instance).
   * TODO - check why I have noted that this is connected with fail fast
   *   \---> Maybe because responsibilities are separated so it allows for bugs and failures to appear sooner and architecture
   *   wise, it becames more stable?
   *
   * @param req - the request
   * @param next - the next interceptor in the order o processing chain. The order will be at app.module.ts
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('skipInterceptor') !== 'true') {
      const reqClone = req.clone({ headers: req.headers.set('authorization', 'headerDeAutorizacao') });
      return next.handle(reqClone);
    }
    return next.handle(req);
  }
}

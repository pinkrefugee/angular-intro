import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('token')
                }
            });
        }
        return next.handle(request);
    }
}

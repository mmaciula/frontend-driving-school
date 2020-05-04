import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

const HEADER = 'Authorization';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    intercept(httpRequest: HttpRequest<any>, nextInterceptor: HttpHandler) {
        let authenticationRequest = httpRequest;
        const storedToken = this.token.getToken();

        if (storedToken != null) {
            authenticationRequest = httpRequest.clone({ headers: httpRequest.headers.set(HEADER, 'Bearer ' + storedToken) });
        }

        return nextInterceptor.handle(authenticationRequest);
    }
}

export const InterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];

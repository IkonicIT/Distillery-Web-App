import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
// import sessionStorage from './app-services/sessionStorage';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from './app.config.service';

@Injectable()
export class HttpService extends HttpClient {

    constructor(handler: HttpHandler,
        // tslint:disable-next-line:variable-name
                private _appConfig: AppConfigService) {
        super(handler);
    }

    handleHttpError(error: HttpErrorResponse) {
        const httpError = {};
        if (error.status !== 200) {
            if (error.status === 401) {
                //  window.location.href = this._appConfig.urlReferrer
            } else {
                // tslint:disable-next-line:no-string-literal
                httpError['errorNumber'] = error.status;
                // tslint:disable-next-line:no-string-literal
                httpError['message'] = error.error;
                return throwError(httpError);
            }
        }
    }
}

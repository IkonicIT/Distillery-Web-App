import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }


  getAllAlertss(postBody) {
    const url = 'imgt/fethInvMgmDts';
    return this._http.post<any>(url, postBody)
      .pipe(catchError(this._http.handleHttpError));
  }

  createAlerts(postBody) {
    const url = 'imgt/saveIndentDts';
    return this._http.post<any>(url, postBody)
      .pipe(catchError(this._http.handleHttpError));
  }
}

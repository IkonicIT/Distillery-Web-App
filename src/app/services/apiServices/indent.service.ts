import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndentService {



  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }


  getAllIndents(postBody) {
    const url = 'imgt/lastThirtyDays';
    return this._http.get<any>(url)
      .pipe(catchError(this._http.handleHttpError));
  }
  oldIndents(postBody) {
    const url = 'imgt/oldArchives';
    return this._http.get<any>(url)
      .pipe(catchError(this._http.handleHttpError));
  }
  createIndent(postBody) {
    const url = 'imgt/saveIndentDts';
    const requestBody = {
      requestData: postBody
    };
    return this._http.post<any>(url, requestBody)
      .pipe(catchError(this._http.handleHttpError));
  }
  getDepotDts(): Observable<any> {
    return this._http.get<any>('imgt/fetchDepotDts').pipe(catchError(this._http.handleHttpError));
  }
  getRetailersMDts() {
    return this._http.get<any>('imgt/fetchRetailersMDts').pipe(catchError(this._http.handleHttpError));
  }
  getVehicleDts() {
    return this._http.get<any>('dist/fetchActVehicleDts').pipe(catchError(this._http.handleHttpError));
  }

  getProductDts() {
    return this._http.get<any>('imgt/fetchProductDts').pipe(catchError(this._http.handleHttpError));
  }

}

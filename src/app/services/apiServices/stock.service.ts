import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }

  // http://18.216.158.31:9081/api/rtStock/fetchRetailersStockDts
  getAllStocks(postBody) {
    const url = 'rtStock/fetchRetailersStockDts';
    return this._http.post<any>(url, postBody)
      .pipe(catchError(this._http.handleHttpError));
  }

  // createIndent(postBody){
  //   const url = 'imgt/savetockDts';
  //   return this._http.post<any>(url,postBody)
  //   .pipe(catchError(this._http.handleHttpError));
  // }
}

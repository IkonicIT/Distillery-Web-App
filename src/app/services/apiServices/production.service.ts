import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private _http:HttpService) { }

  getProducts(){
    const url = 'product/fetchLineInfoDts';
    console.log(url);
    return this._http.get<any>(url)
    .pipe(catchError(this._http.handleHttpError));
  }
//   saveExciseData(postBody){
//     const url = 'excise/saveExciseData';
//     console.log(url);
//     return this._http.post<any>(url, postBody)
//     .pipe(catchError(this._http.handleHttpError));
//   }
}
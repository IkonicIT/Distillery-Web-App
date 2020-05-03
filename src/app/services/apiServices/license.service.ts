import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private _http:HttpService) { }

  
  getAllLicenses(postBody){
    const url = '/rtlic/fetchRetailerLicDts';
    console.log(url);
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }

  createLicense(postBody){
    const url = 'imgt/saveLicenseDts';
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }
}

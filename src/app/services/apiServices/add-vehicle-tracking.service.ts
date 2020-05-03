import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddVehicleService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }

  // http://18.216.158.31:9081/api/rtStock/fetchRetailersStockDts
  // http://18.216.158.31:9081/api/dist/saveRouteDetails
  saveRouteDetails(postBody) {
      console.log('post body...' + postBody);
    //  const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

      const url = 'dist/saveRouteDetails';
    // this._http.


      return this._http.post<any>(url, postBody)
        .pipe(catchError(this._http.handleHttpError));



  // createIndent(postBody){
  //   const url = 'imgt/savetockDts';
  //   return this._http.post<any>(url,postBody)
  //   .pipe(catchError(this._http.handleHttpError));
  // }
    }

    addVehicleTracking(payLoad: any): Observable<any> {
      return this._http.post('dist/addVehicleTracking', payLoad);
    }

    getDestinationList(): Observable<any> {
      return this._http.get('dist/fetchDestinations');
    }
}

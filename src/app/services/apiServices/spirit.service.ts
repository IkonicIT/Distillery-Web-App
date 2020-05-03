import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpiritService {

  constructor(private http: HttpService) { }

  getSpiritList(): Observable<any> {
    const url = `spirit/dtWiseProcurStms`;
    console.log(url);
    const page = {
      pageNumber: 0,
      pageSize: 10
    };
    const requestPayload = {
      pageInfo: page
    };
    return this.http.post<any>(url, requestPayload)
    .pipe(catchError(this.http.handleHttpError));
  }

  getSpiritTypes(): Observable<any> {
    const url = `spirit/fetchActiveReqTypes`;
    return this.http.get<any>(url)
    .pipe(catchError(this.http.handleHttpError));
  }
  getSuppliers(): Observable<any> {
    const url = `spirit/fetchActSuppliers`;
    return this.http.get<any>(url)
    .pipe(catchError(this.http.handleHttpError));
  }
  saveSpiritForm(payload: any): Observable<any> {
    const url = `/spirit/saveOrUpdateProcReq`;
    return this.http.post<any>(url, payload)
    .pipe(catchError(this.http.handleHttpError));
  }

  saveRecipt(payload: any): Observable<any> {
    const url = `/spirit/saveOrUpdateReceiptDts`;
    return this.http.post<any>(url, payload)
    .pipe(catchError(this.http.handleHttpError));
  }

}

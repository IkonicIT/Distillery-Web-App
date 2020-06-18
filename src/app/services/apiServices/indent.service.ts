import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class IndentService {

  public depotNames:any;
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
  
  createshipmenttransportIndent(postBody) {
    const url = 'shipment/saveTransportPermitRequest';
    const requestBody = {
      requestData: postBody
    };
    return this._http.post<any>(url, requestBody)
      .pipe(catchError(this._http.handleHttpError));
  }
  saveSpecialIndent(postBody) {
    const url = 'ifs/saveIFS';
     const requestBody = {
      requestData: postBody
    }; 
    /*  const requestBody = {
      requestData: postBody
    }; */
    return this._http.post<any>(url,requestBody)
      .pipe(catchError(this._http.handleHttpError));
  }
  SaveIfs(postBody){
    const url = 'ifs/saveIndentTypes';
    const requestBody = {
     requestData: postBody
   }; 
   /*  const requestBody = {
     requestData: postBody
   }; */
   return this._http.post<any>(url,requestBody)
     .pipe(catchError(this._http.handleHttpError));
  }
  getALLIFS() {
    const url = 'ifs/getAllIFS';
    return this._http.get<any>(url)
      .pipe(catchError(this._http.handleHttpError));
  }
  fetchAllIFS (){
    const url = 'ifs/fetchAllIFS';
    return this._http.get<any>(url)
      .pipe(catchError(this._http.handleHttpError));
  }
  fetchByPid(ifsPid){
    const url = 'ifs/fetchPrdctByIfsPid?ifsPid=';
    return this._http.get<any>(url + ifsPid)
      .pipe(catchError(this._http.handleHttpError));
  }
  deleteproduct(ifsPid){
    const url='ifs/deleteIFSPrdct?ifsPid=';
    return this._http.delete<any>(url + ifsPid )
      .pipe(catchError(this._http.handleHttpError));
  }
  fetchByIfs(ifsNo){
    const url = 'ifs/fetchIFSByIFSNO?ifsNo=';
    return this._http.get<any>(url + ifsNo)
      .pipe(catchError(this._http.handleHttpError));
  }
  getifsdetails(indentId) {
    const url = 'ifs/getIfsDetails?indentNo=';
    return this._http.get<any>(url + indentId)
      .pipe(catchError(this._http.handleHttpError));
  }
  updateIfs(requestBody) {
    const url='ifs/updateIFSProduct';
   
    return this._http.put<any>(url,requestBody)
      .pipe(catchError(this._http.handleHttpError));
}
  getDepotDts(): Observable<any> {
    return this._http.get<any>('imgt/fetchDepotDts').pipe(catchError(this._http.handleHttpError));
  }
  getDepoNames(): Observable<any> {
    return this._http.get<any>('imgt/fetchDepoNames').pipe(catchError(this._http.handleHttpError));
  }
  getDistilleryNames(): Observable<any> {
    return this._http.get<any>('imgt/distilleryNames').pipe(catchError(this._http.handleHttpError));
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

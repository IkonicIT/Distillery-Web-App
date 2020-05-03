import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortagesService {

  constructor(private _http:HttpService) { }

  getfetchshortageDts(){
    const url = 'shortage/fetchshortageDts';
    console.log(url);
    return this._http.get<any>(url)
    .pipe(catchError(this._http.handleHttpError));
  }
}
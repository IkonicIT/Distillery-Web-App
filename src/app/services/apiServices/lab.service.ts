import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpService) { }

  getLabSampleList(): Observable<any> {
    const url = `lab/getAllSamples`;
    console.log(url);
    return this.http.get<any>(url)
    .pipe(catchError(this.http.handleHttpError));
  }

  saveLabSample(obj: any): Observable<any> {
    return this.http.post<any>('lab/saveLabSample', obj)
    .pipe(catchError(this.http.handleHttpError));
  }
}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedInUserDetails: any;
  private userLogin$ = new BehaviorSubject<boolean>(false);


  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) {

  }
  setUserLogin(value: boolean): void {
    this.userLogin$.next(value);
  }
  getUserLogin(): Observable<any> {
    return this.userLogin$.asObservable();
  }
  login(postBody) {
    const url = 'user/login';

    const requestBody = {
      requestData: postBody
    };
    // const url = 'http://18.216.158.31:9081/api/user/login';
    const response = this._http.post<any>(url, requestBody);
    // .pipe(catchError(this._http.handleHttpError));
    console.log('login response is' + response);
    // console.log('firstName is'+ response.responseHeader.responseData.firstName);

    return response;
  }
  changePassword(postBody) {
    const url = 'user/changePwd';
    const requestBody = {
      requestData: postBody
    };
    // const url = 'http://18.216.158.31:9081/api/user/login';
    const response = this._http.post<any>(url, requestBody);
    // .pipe(catchError(this._http.handleHttpError));
    console.log('change password response is ' + response);
    // console.log('firstName is'+ response.responseHeader.responseData.firstName);

    return response;
  }
}

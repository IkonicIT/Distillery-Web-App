import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private _http:HttpService) {

   }

  /**
 
   */

  otpGeneration(postBody){

    const url = 'user/generateOTP';
      // userId and Phone Number
    let requestBody ={
      requestData:postBody
    }
   var response = this._http.post<any>(url,requestBody)
  console.log('generate OTP response is'+ response);
  
  return response;

  }

  forgotPassword(postBody){
      const url = 'user/validateEmailNum';
      
      let requestBody ={
        requestData:postBody
      }
     var response = this._http.post<any>(url,requestBody)

    console.log('forgotpassword response is'+ response);
    
    return response;
  }
  createNewPwd(reqBody):Observable<any>{
    let requestBody ={
      requestData:reqBody
    }
    return this._http.post('user/createNewPwd',requestBody);
  }
  /** const url = 'user/login';
    var response = this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
   console.log('login response is'+ response);
   //console.log('firstName is'+ response.responseData.firstName); */
  // createIndent(postBody){
    
  //   const url = 'imgt/saveIndentDts';
  //   return this._http.post<any>(url,postBody)
  //   .pipe(catchError(this._http.handleHttpError));
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../services/apiServices/forgot-password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService, 
    private _formBuilder: FormBuilder, private forgotPasswordService: ForgotPasswordService) { }
  forgotPasswordForm: FormGroup
  emailOrNum: any;
  showError = false;
  isGetOtp = false;
  isCreateNewPwd = false;
  isPwdNotMatched = false;
  pwdModel: any = {};
  userId = 0;
  ngOnInit() {
    this.loginInitForm();
  }

  /**
   * Init Form for login
   */
  loginInitForm() {
    this.forgotPasswordForm = this._formBuilder.group({
      emailOrNum: [null, Validators.required]

    })
  }
  clear() {
    this.isGetOtp = false;
    this.showError = false;
    this.userId = 0;
    this.isPwdNotMatched = false;
    this.isCreateNewPwd = false;
    this.forgotPasswordForm.controls['emailOrNum'].setValue("");
  }
  changePwd() {
    this.isPwdNotMatched=false;
    if ((this.pwdModel.newPwd != null && this.pwdModel.confirmPwd != null) && (this.pwdModel.newPwd == this.pwdModel.confirmPwd)) {
      this.pwdModel.userId = this.userId;
      this.forgotPasswordService.createNewPwd(this.pwdModel).subscribe(res => {
        this.toastr.success('password changed successfully','');
        this.router.navigate(['login']);
      },error=>{
        this.toastr.error('password changed successfully','unabled to changed please try again');
      });
    }
    else{
      this.isPwdNotMatched=true;
    }
  }
  forgotpassword() {
    this.showError = false;
    if (this.forgotPasswordForm.valid) {
      this.forgotPasswordService.forgotPassword(this.forgotPasswordForm.value).subscribe(data => {
        if (data) {
          // localStorage.setItem("userName",data.responseData.firstName);
          this.userId = data.responseData.userId;
          this.isGetOtp = true;
          //this.router.navigate(['../features']);
        }
      }, error => {
        this.toastr.error('unhandled error','');
        this.showError = true;
      });
      // this.router.navigate(['../features']);
    }

  }
  generateOtp() {
    let reqBody = {
      "userId": this.userId,
      "emailOrNum": this.forgotPasswordForm.controls["emailOrNum"].value
    }
    this.forgotPasswordService.otpGeneration(reqBody).subscribe(res => {
      this.toastr.success('OTP Successfully Sent To Your mobile Number','');
      this.isCreateNewPwd = true;
    }, error => {
      this.toastr.error('Server Side Issue and please try again','');
    }, () => {
      //this.clear();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/apiServices/login.service';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from './validations';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  model: any = {};
  errorsList: any = {};
  constructor(private loginService: LoginService, private toastr: ToastrService, public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changePassword() {
    if (this.validate()) {
      const req = {
        userId: localStorage.getItem('userId'),
        oldPwd: this.model.currentPassword,
        newPwd: this.model.newPassword,
      };
      this.loginService.changePassword(req).subscribe(data => {
        if (data.responseData != null) {
          this.toastr.success('password changed successfully', '');
        }
      },
        error => {
          this.toastr.error('password changed successfully', 'unabled to changed please try again');
          console.log('error');
        });
    }
  }


  validate() {
    let isValid = true;
    const list = [
      { property: 'currentPassword', validationTypes: ['required'] },
      { property: 'newPassword', validationTypes: ['required'] },
      { property: 'confirmPassword', validationTypes: ['required'] }
    ];
    this.errorsList = Validatons.validate(this.model, list);
    Object.keys(this.errorsList).forEach(e => {
      if (this.errorsList[e].length > 0) {
        isValid = false;
        return false;
      }
    });
    return isValid;
  }
  getErros(name: string) {
    if (this.errorsList.hasOwnProperty(name)) {
      return this.errorsList[name];
    } else {
      return [];
    }
  }



}

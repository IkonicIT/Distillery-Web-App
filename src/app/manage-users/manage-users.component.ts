import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/apiServices/login.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private router: Router, private _formBuilder: FormBuilder, private loginService: LoginService) { }
  userForm: FormGroup
  ngOnInit() {
    this.userFormInitForm();
  }

  /**
   * Init Form for login
   */
  userFormInitForm() {
    this.userForm = this._formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  /**
   * Login
   */

  save() {

  }


  edit() {

  }
  login() {
    if (this.userForm.valid) {
      // Uncomment after login api
      this.loginService.login(this.userForm.value).subscribe(data => {
        if (data) {
          localStorage.setItem("userName", data.responseData[0].userName);
          this.router.navigate(['../features']);
        }
      }, error => {
      });
      this.router.navigate(['../features']);
    }
  }
}

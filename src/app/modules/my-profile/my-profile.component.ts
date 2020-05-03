import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ChangePasswordComponent } from '../change-password/change-password.component';

import { config } from 'rxjs';
import { LoginService } from 'src/app/services/apiServices/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  loggedInUserDetails: any = [];
  model: any = {};

  constructor(private dialog: MatDialog, private status: MatDialog, private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.loggedInUserDetails = this.loginService.loggedInUserDetails;
    if (this.loggedInUserDetails != null) {
      this.model.userName = this.loggedInUserDetails[0].userName;
    }
  }
  navToFeatures() {
    this.router.navigate(['../features']);
  }

  sampleFormWindow() {
    // tslint:disable-next-line:no-shadowed-variable
    const config: MatDialogConfig = {
      height: '400px',
      width: '1000px'
    };
    this.dialog.open(ChangePasswordComponent, config);

  }


}

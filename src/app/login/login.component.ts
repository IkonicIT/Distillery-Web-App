import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/apiServices/login.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '../services/common/local-store.service';
import * as AuthActions from '../store/actions';
import { Store } from '@ngrx/store';
import { State } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private router: Router, private toastr: ToastrService, private _formBuilder: FormBuilder,
              private loginService: LoginService, private localServ: LocalStoreService,
              private store: Store<State>) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginInitForm();
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth) {
      this.loginService.setUserLogin(true);
      this.store.dispatch(new AuthActions.AddAuth(auth));
      this.router.navigate(['../features'], { replaceUrl: true });
    }
  }

  /**
   * Init Form for login
   */
  loginInitForm() {
    this.loginForm = this._formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  /**
   * Login
   */
  login() {
    // this.router.navigate(['../features'], { replaceUrl: true });
    if (this.loginForm.valid) {
      // Uncomment after login api
      this.loginService.login(this.loginForm.value).subscribe(data => {
        if (data.responseData != null) {
          this.toastr.success('login', 'successfully login');
          this.loginService.loggedInUserDetails = data.responseData;
          localStorage.setItem('userId', data.responseData.userId);
          localStorage.setItem('userName', data.responseData.userName);
          localStorage.setItem('roleName', data.responseData.rolesList[0].roleName);
          localStorage.setItem('permissionsList', data.responseData.rolesList[0].permissionsList);
          this.localServ.storeLoginUser('Username', data.responseData.userName);
          this.loginService.setUserLogin(true);
          fetch('../../assets/jsonData/perm.json').then(res => {
            return res.json();
          })
            .then(subMenus => {
              fetch('../../assets/jsonData/features.json').then(r => {
                return r.json();
              })
                .then(mainMenus => {
                  this.store.dispatch(new AuthActions.AddAuth({permissionList: data.responseData.rolesList[0].permissionsList,
                    favItems: data.responseData.favourites, menus: mainMenus, childMenus: subMenus, currentMenu: null }));
                });
            });

          this.router.navigate(['../features'], { replaceUrl: true });
        } else {
          this.toastr.error('unauthorized', 'please enter valid credentials');
        }
      }, error => {
        this.toastr.error('login', 'un handled error');
      });
    }
  }
}

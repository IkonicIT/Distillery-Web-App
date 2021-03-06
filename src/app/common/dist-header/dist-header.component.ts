import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from 'src/app/services/common/local-store.service';
import { UserService } from 'src/app/services/apiServices/user.service';
import { LoginService } from 'src/app/services/apiServices/login.service';

@Component({
  selector: 'app-dist-header',
  templateUrl: './dist-header.component.html',
  styleUrls: ['./dist-header.component.css']
})
export class DistHeaderComponent implements OnInit {
  userName: string;
  dateNow: Date;
  toggleSideBar = true;
  lastLogin:any;
  lastLoginRequestBody:any= {};

  constructor(private router: Router, private toastr: ToastrService, private localServ: LocalStoreService,
              private userServ: UserService, private loginServ: LoginService) { }

  ngOnInit() {
    // this.userName = localStorage.getItem('userName');
    this.dateNow = new Date();
    this.setUsername();
    this.lastLoginForm();  
  }
  logOut() {
    this.localServ.removeLoginUser('Username');
    this.setUsername();
    localStorage.clear();
    sessionStorage.clear();
    this.loginServ.setUserLogin(false);
    this.toastr.success('successfully logout');
    this.router.navigate(['login']);
  }
  lastLoginForm() {
    this.lastLoginRequestBody.userId =  parseInt(localStorage.getItem('userId'));
    this.loginServ.lastLogin(this.lastLoginRequestBody).subscribe(data => {
        if (data.responseData != null) {
          this.lastLogin = data.responseData;
          this.toastr.success('login', 'successfully login');
          console.log('lastLogin time is'+ this.lastLogin);

          } 
      }, error => {
        this.toastr.error('login', 'un handled error');
      });
    
}
  myProfileSection() {
    this.router.navigate(['home/module/profile']);
  }

  setUsername() {
    this.localServ.watchStorage().subscribe((data: string) => {
      this.userName = localStorage.getItem('Username');
    });
  }

  navToFeatures() {
    this.router.navigate(['../features']);
  }

  toggleClick(): void {
    this.toggleSideBar = !this.toggleSideBar;
    this.userServ.setToggleSideBar(this.toggleSideBar);
  }

}

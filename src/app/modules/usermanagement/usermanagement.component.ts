import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/apiServices/user.service';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from 'src/app/services/validations';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  user = {
    userId: null,
    userName: '',
    firtsName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    password: '',
    roleIds: []
  };
  isAdd = true;
  errorsList: any = {};
  activeRoles = [];
  usersList=[];
  constructor(private _userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this._userService.getActiveRoles().subscribe(data => {
      this.activeRoles = data.responseData;
      console.log(this.activeRoles);
    });
    this._userService.fetchActiveUsers().subscribe(data=>{
      this.usersList = data.responseData;
    })
  }
  onChangeUser($event){
    this.user=cloneDeep($event);
  }
  save() {
    if (this.validate()) {
      this._userService.saveUserWithRolesMap(this.user).subscribe(res => {
        this.toastr.success(res.responseData, '');
        this.clear();
      }, error => {
        console.log(error);
        this.toastr.error('unhandled error', '');
      });
    }
    this.getUsers();
  }
  getErros(name: string) {
    if (this.errorsList.hasOwnProperty(name)) {
      return this.errorsList[name];
    } else {
      return [];
    }
  }
  clear(){
    this.user = {
      userId: 0,
      userName: '',
      firtsName: '',
      lastName: '',
      emailId: '',
      mobileNumber: '',
      password: '',
      roleIds: []
    };
    this.errorsList=[];
    this.isAdd=true;
  }
  validate() {
    let isValid = true;
    const list = [
      { property: 'userName', validationTypes: ['required'] },
      { property: 'firtsName', validationTypes: ['required'] },
      { property: 'lastName', validationTypes: ['required'] },
      { property: 'emailId', validationTypes: ['required'] },
      { property: 'mobileNumber', validationTypes: ['required'] },
      { property: 'password', validationTypes: ['required'] },
      { property: 'roleIds', validationTypes: ['required'] }
    ];
    this.errorsList = Validatons.validate(this.user, list);
    Object.keys(this.errorsList).forEach(e => {
      if (this.errorsList[e].length > 0) {
        isValid = false;
        return false;
      }
    });
    return isValid;
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/apiServices/user.service';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from 'src/app/services/validations';
import * as cloneDeep from 'lodash/cloneDeep';
import { IndentService } from '../../services/apiServices/indent.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  user = {
    userId: null,
    userName: '',
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    password: '',
    roleIds: [],
    department:'',
    deptId:0
  };
  isAdd = true;
  errorsList: any = {};
  activeRoles = [];
  departments = ['Distillery','Depot']; 
  usersList=[];
  depotNames :any [] = [];
  deposList:any;
  depotId: any;
  distilleryNames :any [] = [];
  distilleryList:any;
  distilleryId: any;
  depotName:any;
  distilleryName:any;
  constructor(private _userService: UserService, private toastr: ToastrService,private _indentService: IndentService) { }

  ngOnInit() {
    this.getUsers();
    this.getDepoNames();
    this.getDistilleryNames();
  }
  getDepoNames(){
    this._indentService.getDepoNames().subscribe(response => {
      this.deposList =response;
      this.deposList.forEach(depo => {
      this.depotNames.push(depo.depotName.toUpperCase());    
      });
      console.log('depotNames'+ this.depotNames);
    });
  }
  getDistilleryNames(){
    this._indentService.getDistilleryNames().subscribe(response => {
      this.distilleryList =response;
      this.distilleryList.forEach(dis => {
      this.distilleryNames.push(dis.name.toUpperCase());    
      });
      console.log('distilleryNames'+ this.distilleryNames);
    });
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
    if(this.user.department == 'Depot'){
    this.deposList.forEach(depo => {
      if(depo.depotName.toUpperCase() == this.depotName){
        this.user.deptId = depo.depotId;
      }      
    });
  } else{
    this.distilleryList.forEach(dis => {
      if(dis.name.toUpperCase() == this.distilleryName){
        this.user.deptId = dis.id;
      }      
    });
  }
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
      firstName: '',
      lastName: '',
      emailId: '',
      mobileNumber: '',
      password: '',
      roleIds: [],
      department:'',
      deptId:0
    };
    this.errorsList=[];
    this.isAdd=true;
  }
  validate() {
    let isValid = true;
    const list = [
      { property: 'userName', validationTypes: ['required'] },
      { property: 'firstName', validationTypes: ['required'] },
      { property: 'lastName', validationTypes: ['required'] },
      { property: 'emailId', validationTypes: ['required'] },
      { property: 'mobileNumber', validationTypes: ['required'] },
      { property: 'password', validationTypes: ['required'] },
      { property: 'roleIds', validationTypes: ['required'] },
      { property: 'department', validationTypes: ['required'] }
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

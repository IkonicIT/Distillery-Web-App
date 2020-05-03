import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/apiServices/user.service';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from 'src/app/services/validations';
import * as cloneDeep from 'lodash/cloneDeep';
import { Permission, Role } from '../models/interface.service';

@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.css']
})
export class RolemanagementComponent implements OnInit {
  errorsList: any = {};
  activeRoles = [];
  isAdd = true;
  rolesWithPrms = {
    roleId: null,
    roleName: '',
    roleType: '',
    description: '',
    permissionsList: [],
    status: 'Active'
  };
  checkIfSelectAll: boolean;
  permRoutes: Array<{ title: string, routerLink: string }> = [];
  permissions: Permission[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private _userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
this.getRoles();
  }
  getRoles(): void {
    this._userService.getActiveRoles().subscribe(data => {
      this.activeRoles = data.responseData;
      console.log(this.activeRoles);
    });
    fetch('../../assets/jsonData/perm.json').then(res => {
      return res.json();
    })
      .then(resp => {
        this.permissions = resp;
        this.permissions.forEach(per => {
          per['view'] = false;
          per['edit'] = false;
          per['add'] = false;
          per['delete'] = false;
        });
        // this.permRoutes = resp;
        // this.pushRolesPerms();
      });
  }
  addMap(index: number) {
    this.rolesWithPrms.permissionsList.splice(index + 1, 0, { path: '', isView: 0, isDelete: 0, isAdd: 0, isEdit: 0 });
  }
  deleteMap(index: number) {
    this.rolesWithPrms.permissionsList.splice(index, 1);
  }
  save() {
    this.permissions.forEach(perm => {
      perm.isView = perm['view'] ? 1 : 0;
      perm.isDelete = perm['delete'] ? 1 : 0;
      perm.isEdit = perm['edit'] ? 1 : 0;
      perm.isAdd = perm['add'] ? 1 : 0;
      perm.path = perm.routerLink;
    });
    const permList = this.permissions.filter(perm => (perm['view'] || perm['delete'] || perm['edit'] || perm['add']));
    console.log(permList);
    if (this.validate()) {
      this.rolesWithPrms.permissionsList = permList;
      this._userService.saveRolePermissions(this.rolesWithPrms).subscribe(res => {
        this.toastr.success(res.responseData, '');
        this.clear();
      }, error => {
        console.log(error);
        this.toastr.error('unhandled error', '');
      });
    }
    // this.getRoles();
  }
  clear() {
    this.rolesWithPrms = {
      roleId: null,
      roleName: '',
      roleType: '',
      description: '',
      permissionsList: [],
      status: 'Active'
    };
    this.permissions.forEach(per => {
      per['view'] = false;
      per['edit'] = false;
      per['add'] = false;
      per['delete'] = false;
      per.isAdd = 0;
      per.isDelete = 0;
      per.isEdit = 0;
      per.isView = 0;
    });
    this.pushRolesPerms();
    this.errorsList = [];
    this.isAdd = true;
  }
  getErros(name: string) {
    if (this.errorsList.hasOwnProperty(name)) {
      return this.errorsList[name];
    } else {
      return [];
    }
  }
  validate() {
    let isValid = true;
    const list = [
      { property: 'roleName', validationTypes: ['required'] },
      { property: 'roleType', validationTypes: ['required'] }
    ];
    this.errorsList = Validatons.validate(this.rolesWithPrms, list);
    Object.keys(this.errorsList).forEach(e => {
      if (this.errorsList[e].length > 0) {
        isValid = false;
        return false;
      }
    });
    return isValid;
  }
  pushRolesPerms() {
    this.permRoutes.forEach(r => {
      this.rolesWithPrms.permissionsList.push({ title: r.title, path: r.routerLink, isView: 0, isDelete: 0, isAdd: 0, isEdit: 0 });
    });

  }
  onChangeRole($event) {
    this.permissions.forEach(per => {
      per['view'] = false;
      per['edit'] = false;
      per['add'] = false;
      per['delete'] = false;
      per.isAdd = 0;
      per.isDelete = 0;
      per.isEdit = 0;
      per.isView = 0;
    });
    this.rolesWithPrms = cloneDeep($event);
    this.rolesWithPrms.permissionsList = [];
    this._userService.fetchPermissionsByRoleId({ roleId: $event.roleId }).subscribe(data => {
      if (data && data.responseData && data.responseData.length) {
        data.responseData.forEach(perm => {
          const localPerm = this.permissions.find(lPerm => perm.path === lPerm.routerLink);
          localPerm['view'] = perm.isView === 1 ? true : false;
          localPerm['edit'] = perm.isEdit === 1 ? true : false;
          localPerm['add'] = perm.isAdd === 1 ? true : false;
          localPerm['delete'] = perm.isDelete === 1 ? true : false;
        });
      }
      // this.permRoutes.forEach(route => {
      // const localPerm = { title: route.title, path: route.routerLink, isView: 0, isDelete: 0, isAdd: 0, isEdit: 0 };
      // this.rolesWithPrms.permissionsList.push(Object.assign(localPerm, ...(data.responseData.filter(e => e.path === route.routerLink))));
      // });
      // this.rolesWithPrms.permissionsList = data.responseData;
    });
  }
  checkAllView(event) {
    const checked = event.target.checked;
    this.permissions.forEach(item => item['view'] = checked);
  }
  checkAllDelete(event) {
    const checked = event.target.checked;
    this.permissions.forEach(item => item['delete'] = checked);
  }
  checkAllAdd(event) {
    const checked = event.target.checked;
    this.permissions.forEach(item => item['add'] = checked);
  }
  checkAllEdit(event) {
    const checked = event.target.checked;
    this.permissions.forEach(item => item['edit'] = checked);
  }
  checkAll(event) {
    const checked = event.target.checked;
    this.permissions.forEach(item => item['view'] = checked);
    this.permissions.forEach(item => item['delete'] = checked);
    this.permissions.forEach(item => item['add'] = checked);
    this.permissions.forEach(item => item['edit'] = checked);
    this.checkIfSelectAll = checked;
  }
}

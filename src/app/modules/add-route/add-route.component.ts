import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/apiServices/user.service";
import { ToastrService } from "ngx-toastr";
import { Validatons } from "src/app/services/validations";
import { AddVehicleService } from "src/app/services/apiServices/add-vehicle-tracking.service";

@Component({
  selector: "app-add-route",
  templateUrl: "./add-route.component.html",
  styleUrls: ["./add-route.component.css"]
})
export class AddRouteComponent implements OnInit {
  errorsList: any = {};
  activeRoles = [];
  isAdd = true;
  vehicleNum: string;
  intermediateRoute: string;
  distillerySource: string;
  intermediateDepots: any = [];
  destinationDepot: string;
  tpPin: string;
  routeCreationDate: Date;
  estimatedStartDate: Date;
  comments: string;
  routedata: any;
  rolesWithPrms = {
    roleId: null,
    roleName: "",
    roleType: "",
    description: "",
    permissionsList: []
  };

  // tslint:disable-next-line:variable-name
  constructor(
    private _userService: UserService,
    private toastr: ToastrService,
    private addVechicleService: AddVehicleService
  ) {}

  ngOnInit() {
    this._userService.getActiveRoles().subscribe(data => {
      this.activeRoles = data.responseData;
    });
    this.rolesWithPrms.permissionsList.push({
      path: "",
      isView: 0,
      isDelete: 0,
      isAdd: 0,
      isEdit: 0
    });
  }
  addMap(index: number) {
    this.rolesWithPrms.permissionsList.splice(index + 1, 0, {
      path: "",
      isView: 0,
      isDelete: 0,
      isAdd: 0,
      isEdit: 0
    });
  }
  deleteMap(index: number) {
    this.rolesWithPrms.permissionsList.splice(index, 1);
  }
  addRoute(index: number) {
    this.rolesWithPrms.permissionsList.splice(index + 1, 0, {
      path: "",
      isView: 0,
      isDelete: 0,
      isAdd: 0,
      isEdit: 0
    });
  }
  deleteRoute(index: number) {
    this.rolesWithPrms.permissionsList.splice(index, 1);
  }
  save() {
    this.routedata = {
      requestData: {
        vehicleNum: this.vehicleNum,
        distillerySource: this.distillerySource,
        intermediateDepots: this.intermediateDepots.push(
          this.intermediateRoute
        ),
        destinationDepot: this.destinationDepot,
        tpPin: this.tpPin,
        routeCreationDate: this.routeCreationDate,
        estimatedStartDate: this.estimatedStartDate,
        comments: this.comments
      }
    };
    this.routedata = JSON.stringify(this.routedata);
    this.addVechicleService.saveRouteDetails(this.routedata).subscribe(
      res => {
        console.log(res);
        this.toastr.success(res.responseData, "");
        this.clear();
      },
      error => {
        console.log(error);
        this.toastr.error("unhandled error", "");
      }
    );
  }
  clear() {
    this.rolesWithPrms = {
      roleId: null,
      roleName: "",
      roleType: "",
      description: "",
      permissionsList: [
        { path: "", isView: 0, isDelete: 0, isAdd: 0, isEdit: 0 }
      ]
    };
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
      { property: "roleName", validationTypes: ["required"] },
      { property: "roleType", validationTypes: ["required"] }
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
}

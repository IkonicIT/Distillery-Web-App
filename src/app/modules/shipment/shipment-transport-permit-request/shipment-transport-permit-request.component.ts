import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from '../../../services/validations';
import { NgxPermissionsService } from 'ngx-permissions';
import { DateFilter } from 'ag-grid-community';
import { timestamp } from 'rxjs/operators';
import { DialoguePopupComponent } from 'src/app/custom/dialogue-popup/dialogue-popup.component';
import { config } from 'process';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { HttpResponse, HttpResponseBase, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-shipment-transport-permit-request',
  templateUrl: './shipment-transport-permit-request.component.html',
  styleUrls: ['./shipment-transport-permit-request.component.css']
})
export class ShipmentTransportPermitRequestComponent implements OnInit, OnDestroy {
  
  subscript: any;
  showCreateIndentTab: boolean;
  indentModel: any = {};
  deportDts = [];
  RetailersMDts = [];
  shopNames = [];
  shipmentid:any;
  minDate = new Date();
  selectedMoment = new Date();
  errorsList: any = {};
  Vehicles = [];
  products = [];
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder, private _router: Router, private toastr: ToastrService,
              // tslint:disable-next-line:variable-name
              private _activetedRoute: ActivatedRoute,private transportDialog: MatDialog,
              // tslint:disable-next-line:variable-name
             
              private _indentService: IndentService, private datePipe: DatePipe,
              private permissionServ: NgxPermissionsService) {

    this.subscript = this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // this.onInitMethod();
        this._router.navigated = false;
      }

    });
  }
  columnDefs = [];
  columnDefs01 = [
    { headerName: 'AuthorisedPerson', field: 'authorisedPerson' },
    { headerName: 'DepotId', field: 'depotId' },
    { headerName: 'DepotName', field: 'depotName' },
    { headerName: 'District', field: 'district' },
    { headerName: 'lrDate', field: 'lrDate' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'ShopName', field: 'shopName' }
  ];
  columnDefs02 = [
    { headerName: 'AuthorisedPerson', field: 'authorisedPerson' },
    { headerName: 'DepotId', field: 'depotId' },
    { headerName: 'DepotName', field: 'depotName' },
    { headerName: 'District', field: 'district' },
    { headerName: 'lrDate', field: 'lrDate' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'ShopName', field: 'shopName' }
  ];
  rowData = [];

  ngOnInit() {
    if (!this.permissionServ.getPermission('home/module/indent')) {
      this._router.navigateByUrl('home/indent-management');
    }
    this.indentModel.depot = 0;
    this.shipmenttransportpermitrequestOnLoad();
  }
  navTohome() {
    this._router.navigate(['../features']);
  }
  shipmenttransportpermitrequestOnLoad() {
    this.indentModel = {
      consignmentType:'',
      route: '',
      transporter: '',
      lrNum: '',
      lrDate: '',
      ofsNo: '',
      vehicleNum: '',
      depotId: '',
      todepot:'',
      validperiod:'',
      routename:'',
     
      shipmentLineDto:
        [{
          brandName: '',
          productCode: '',
          size: '',
          ofsQnty: '',
          allocatedQnty: 0,
          shipmentQty: 0,
          balanceQty: 0,
          exciseDuty:'',
          challanNum:'',
        }]
    };
  }
  ngOnDestroy() {
    if (this.subscript != null) {
      this.subscript.unsubscribe();
    }

  }
  getIndentData(type: any) {
    // throw new Error('Method not implemented.');
    this.showCreateIndentTab = false;
    const req = {
      pageInfo: {
        pageNumber: 0,
        pageSize: 5,
        sortBy: 'indent_detail_id'
      },
      requestData: null
    };


    switch (type) {

      case 'active':
        if (!this.permissionServ.getPermission('home/module/indent/active')) {
          this._router.navigateByUrl('home/indent-management');
        } else {
          this.showCreateIndentTab = false;
          this._indentService.getAllIndents(req).subscribe(data => {
            this.columnDefs = this.columnDefs02;
            this.rowData = data.responseData;
          });
        }

        break;
      case 'old':
        if (!this.permissionServ.getPermission('home/module/indent/create')) {
          this._router.navigateByUrl('home/indent-management');
        } else {
          this.showCreateIndentTab = false;
          this._indentService.oldIndents(req).subscribe(data => {
            this.columnDefs = this.columnDefs01;
            this.rowData = data.responseData;
          });
        }
        break;
      case 'create':
        if (!this.permissionServ.getPermission('home/module/indent/old')) {
          this._router.navigateByUrl('home/indent-management');
        } else {
        this.showCreateIndentTab = true;
        this.createIndent();
        this.shipmenttransportpermitrequestOnLoad();
        }
        break;
      default:
        break;
    }
  }
  createIndent() {
    this._indentService.getDepotDts().subscribe(data => {
      this.deportDts = data['response Date List'];
    });
    this._indentService.getRetailersMDts().subscribe(data => {
      this.RetailersMDts = data['response Date List'];
      this.shopNames = [];
      if (this.RetailersMDts.length > 0) {
        this.setShopNames();
      }
    });
    this._indentService.getVehicleDts().subscribe(data => {
      this.Vehicles = data.responseData;
    });
    this._indentService.getProductDts().subscribe(data => {
      this.products = data.responseData;
    });
  }
  setShopNames() {
    this.RetailersMDts.forEach(retailer => {
      this.shopNames.push(retailer.shopName);
    });
  }

  onDepotChange() {
    if (this.indentModel.depot !== 0) {
      this.indentModel.depotName = this.deportDts.filter(e => e.depotId === this.indentModel.depot)[0].depotName;
    }
  }
  onInitMethod() {
    this.getIndentData(this._activetedRoute.snapshot.params.type);
  }
  navback(){
    this.transportDialog.closeAll();
  }

  getAllIndentData() {
    const req = {
      pageInfo: {
        pageNumber: 0,
        pageSize: 5,
        sortBy: 'indent_detail_id'
      },
      requestData: null
    };
    this._indentService.getAllIndents(req).subscribe(data => {
      this.rowData = data['response Date List'];
    });
  }

  addProduct(index: number) {
    this.indentModel.shipmentLineDto.splice(index + 1, 0, {
      brandName: '',
      productCode: '',
      size: '',
      ofsQnty: '',
      allocatedQnty: 0,
      shipmentQty: 0,
      balanceQty: 0,
      exciseDuty:'',
      challanNum:'',
    });
  }
  deleteProduct(index: number) {
    this.indentModel.shipmentLineDto.splice(index, 1);
  }
  submitshipmenttransportpermitrequest() {
    if (this.validate()) {
      this.indentModel.createdate=this.indentModel.lrDate;
      this.indentModel.updatedDate=this.indentModel.lrDate;
      //  this.indentModel.createdate = this.datePipe.transform(this.indentModel.createdate, 'yyyy-MM-dd hh:mm:ss');
      this._indentService.createshipmenttransportIndent(this.indentModel).subscribe(data => {
        this.toastr.success('successfully added', '');
        this.indentModel = {
          consignmentType:'',
      route: '',
      transporter: '',
      lrNum: '',
      lrDate: '',
      ofsNo: '',
      vehicleNum: '',
      depotId:'' ,
      todepot:'',
      validperiod:'',
      routename:'',
          
      shipmentLineDto:
        [{
          brandName: '',
          productCode: '',
          size: '',
          ofsQnty: '',
          allocatedQnty: 0,
          shipmentQty: 0,
          balanceQty: 0,
          exciseDuty:'',
          challanNum:'',
        }]
           
        }
        alert("tprno is:"+ data.shipmentHdrId);
       
      }, error => {
        console.log(error);
        this.toastr.error('unhandled error', '');
      });
    }
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
      { property: 'route', validationTypes: ['required'] },
      { property: 'ofsNo', validationTypes: ['required'] },
      { property: 'lrNum', validationTypes: ['required'] },
      // { property: 'contactNumber', validationTypes: ['required', 'min(9)'] },
      // { property: 'vehicleNumber', validationTypes: ['required'] }
    ];
    this.errorsList = Validatons.validate(this.indentModel, list);
    Object.keys(this.errorsList).forEach(e => {
      if (this.errorsList[e].length > 0) {
        isValid = false;
        return false;
      }
    });
    return isValid;


  }
  onconsignmenttypeChange() {
    this.RetailersMDts.forEach(retailer => {
      if (retailer.shopName === this.indentModel.shopName) {
        this.indentModel.depot = retailer.depotId;
        // this.onDepotChange();
        this.indentModel.authorisedPerson = retailer.owner;
        this.indentModel.retailerCode = retailer.retailerCode;
      }
    });
  }

  onVehicleChange() {
    this.Vehicles.forEach(vehicle => {
      if (vehicle.vehicleNum === this.indentModel.vehicleNumber) {

        this.indentModel.contactNumber = vehicle.vehiclePOCNumber;
      }
    });
  }


  onProductChange() {

  }
}

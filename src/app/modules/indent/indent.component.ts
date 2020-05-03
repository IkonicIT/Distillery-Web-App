import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Validatons } from '../../services/validations';
import { NgxPermissionsService } from 'ngx-permissions';


@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrls: ['./indent.component.css']
})
export class IndentComponent implements OnInit, OnDestroy {
  subscript: any;
  showCreateIndentTab: boolean;
  indentModel: any = {};
  deportDts = [];
  RetailersMDts = [];
  shopNames = [];
  minDate = new Date();
  selectedMoment = new Date();
  errorsList: any = {};
  Vehicles = [];
  products = [];
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder, private _router: Router, private toastr: ToastrService,
              // tslint:disable-next-line:variable-name
              private _activetedRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _indentService: IndentService, private datePipe: DatePipe,
              private permissionServ: NgxPermissionsService) {

    this.subscript = this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.onInitMethod();
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
    { headerName: 'IndentCreationDate', field: 'indentCreationDate' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'ShopName', field: 'shopName' }
  ];
  columnDefs02 = [
    { headerName: 'AuthorisedPerson', field: 'authorisedPerson' },
    { headerName: 'DepotId', field: 'depotId' },
    { headerName: 'DepotName', field: 'depotName' },
    { headerName: 'District', field: 'district' },
    { headerName: 'IndentCreationDate', field: 'indentCreationDate' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'ShopName', field: 'shopName' }
  ];
  rowData = [];

  ngOnInit() {
    if (!this.permissionServ.getPermission('home/module/indent')) {
      this._router.navigateByUrl('home/indent-management');
    }
    this.indentModel.depot = 0;
    this.indentModelOnLoad();
  }
  navTohome() {
    this._router.navigate(['../features']);
  }
  indentModelOnLoad() {
    this.indentModel = {
      depot: 0,
      shopName: '',
      authorisedPerson: '',
      depotName: '',
      retailerCode: '',
      contactNumber: '',
      vehicleNumber: '',
      indentCreationDate: '',
      productList:
        [{
          description: '',
          productCode: '',
          productDescription: '',
          barCode: '',
          noOfUnits: 0,
          unitPrice: 0,
          totalPrice: 0
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
        this.indentModelOnLoad();
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
    this.indentModel.productList.splice(index + 1, 0, {
      description: '',
      productCode: '',
      productDescription: '',
      barCode: '',
      noOfUnits: 0,
      unitPrice: 0,
      totalPrice: 0
    });
  }
  deleteProduct(index: number) {
    this.indentModel.productList.splice(index, 1);
  }
  submitIndent() {
    if (this.validate()) {
      this.indentModel.indentCreationDate = this.datePipe.transform(this.indentModel.indentCreationDate, 'yyyy-MM-dd hh:mm:ss');
      this._indentService.createIndent(this.indentModel).subscribe(data => {
        this.toastr.success('successfully added', '');
        this.indentModel = {
          depot: 0, shopName: '', authorisedPerson: '', depotName: '', retailerCode: '', contactNumber: '', indentCreationDate: '',
          vehicleNumber: '',
          productList:
            [{
              description: '', productCode: '', productDescription: '', barCode: '', noOfUnits: 0, unitPrice: 0, totalPrice: 0
            }]
        };
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
      { property: 'shopName', validationTypes: ['required'] },
      { property: 'retailerCode', validationTypes: ['required'] },
      { property: 'depotName', validationTypes: ['required'] },
      { property: 'contactNumber', validationTypes: ['required', 'min(9)'] },
      { property: 'vehicleNumber', validationTypes: ['required'] }
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
  onShopNameChange() {
    this.RetailersMDts.forEach(retailer => {
      if (retailer.shopName === this.indentModel.shopName) {
        this.indentModel.depot = retailer.depotId;
        this.onDepotChange();
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LicenseService } from 'src/app/services/apiServices/license.service';

@Component({
  selector: 'app-license-profiles',
  templateUrl: './license-profiles.component.html',
  styleUrls: ['./license-profiles.component.css']
})
export class LicenseProfilesComponent implements OnInit {



  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _licenseService: LicenseService) { }

  columnDefs = [
    { headerName: 'Retailer Code', field: 'retailerCode' },
    { headerName: 'License Details ID', field: 'licenseDetailId' },
    { headerName: 'Deport Name', field: 'depotName' },
    { headerName: 'Issue Date', field: 'issuedDate' },
    { headerName: 'Expiry Date', field: 'expiryDate' },
    { headerName: 'User ID', field: 'userId' },
    { headerName: 'Mobile NO', field: 'mobileNumber' },
    { headerName: 'Email ID', field: 'emailId' }
  ];

  rowData = [

  ];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
    this.getAllLicenseProfile();
  }


  getAllLicenseProfile() {
    const req = {
      pageInfo: {
        pageNumber: 0,
        pageSize: 5,
        sortBy: 'license_detail_id'
      },
      requestData: null
    };
    this._licenseService.getAllLicenses(req).subscribe(data => {
      this.rowData = data['response Date List'];
    });
  }
}


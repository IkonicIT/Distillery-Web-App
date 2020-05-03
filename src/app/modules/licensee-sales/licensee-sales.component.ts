import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-licensee-sales',
  templateUrl: './licensee-sales.component.html',
  styleUrls: ['./licensee-sales.component.css']
})
export class LicenseeSalesComponent implements OnInit {
  hasLicensePerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasLicensePerm = this.permServ.getPermission('home/licensee-sales') ? true : false;
  }

}

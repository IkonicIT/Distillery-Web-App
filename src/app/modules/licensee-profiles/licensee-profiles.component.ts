import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-licensee-profiles',
  templateUrl: './licensee-profiles.component.html',
  styleUrls: ['./licensee-profiles.component.css']
})
export class LicenseeProfilesComponent implements OnInit {
  hasLicenseePerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasLicenseePerm = this.permServ.getPermission('home/licensee-profiles') ? true : false;
  }

}

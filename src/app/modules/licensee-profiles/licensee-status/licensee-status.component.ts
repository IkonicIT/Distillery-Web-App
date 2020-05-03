import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-licensee-status',
  templateUrl: './licensee-status.component.html',
  styleUrls: ['./licensee-status.component.css']
})
export class LicenseeStatusComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/licensee-status'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}

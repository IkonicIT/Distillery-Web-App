import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-licensee',
  templateUrl: './expired-licensee.component.html',
  styleUrls: ['./expired-licensee.component.css']
})
export class ExpiredLicenseeComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') &&
    this.permServ.getPermission('home/licensee-profiles/expired-licensee'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}

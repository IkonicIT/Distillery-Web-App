import { Component, OnInit } from '@angular/core';
import { NgxPermission } from 'ngx-permissions/model/permission.model';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aged-challans',
  templateUrl: './aged-challans.component.html',
  styleUrls: ['./aged-challans.component.css']
})
export class AgedChallansComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {

    if (!(this.permissionServ.getPermission('home/module/indent') &&
        this.permissionServ.getPermission('home/indent-management/aged-challans'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}

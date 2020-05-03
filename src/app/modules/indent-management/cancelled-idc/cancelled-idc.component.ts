import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled-idc',
  templateUrl: './cancelled-idc.component.html',
  styleUrls: ['./cancelled-idc.component.css']
})
export class CancelledIdcComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/cancelled-idc'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}

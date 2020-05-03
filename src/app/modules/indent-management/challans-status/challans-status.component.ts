import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challans-status',
  templateUrl: './challans-status.component.html',
  styleUrls: ['./challans-status.component.css']
})
export class ChallansStatusComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/challan-status'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}

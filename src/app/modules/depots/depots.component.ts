import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-depots',
  templateUrl: './depots.component.html',
  styleUrls: ['./depots.component.css']
})
export class DepotsComponent implements OnInit {
  hasDepotPerm = false;
  constructor(private permissionServ: NgxPermissionsService ) { }

  ngOnInit() {
    this.hasDepotPerm = this.permissionServ.getPermission('home/depots') ? true : false;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShipmentRouteComponent } from './shipment-route/shipment-route.component';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  hasShipmentPerm = false;
  constructor(private permService: NgxPermissionsService) { }

  ngOnInit() {
    this.hasShipmentPerm = this.permService.getPermission('home/shipment') ? true : false;
  }



}

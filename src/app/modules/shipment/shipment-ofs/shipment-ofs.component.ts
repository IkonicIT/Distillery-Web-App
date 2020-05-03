import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentOfsStatusComponent } from '../shipment-ofs-status/shipment-ofs-status.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';



@Component({
  selector: 'app-shipment-ofs',
  templateUrl: './shipment-ofs.component.html',
  styleUrls: ['./shipment-ofs.component.css']
})
export class ShipmentOfsComponent implements OnInit {

  constructor(private statusDialog: MatDialog,
              private permServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/shipment') && this.permServ.getPermission('home/shipment/shipment-ofs'))) {
      this.router.navigateByUrl('home/shipment');
    }
  }
  status() {
    this.statusDialog.open(ShipmentOfsStatusComponent);
  }


}

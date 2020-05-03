import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShipmentRouteComponent } from '../shipment-route/shipment-route.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-shipment-router',
  templateUrl: './shipment-router.component.html',
  styleUrls: ['./shipment-router.component.css']
})
export class ShipmentRouterComponent implements OnInit {
  isAddPerm = false;
  constructor(private route: MatDialog,
              private permServ: NgxPermissionsService,
              private router: Router,
              private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/shipment') && this.permServ.getPermission('home/shipment/shipment-router'))) {
      this.router.navigateByUrl('home/shipment');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/shipment/shipment-router');
    }
  }
  addRoute() {
    const config: MatDialogConfig = {
      height: '400px',
      width: '500px'
    };
    this.route.open(ShipmentRouteComponent, config);
  }

}

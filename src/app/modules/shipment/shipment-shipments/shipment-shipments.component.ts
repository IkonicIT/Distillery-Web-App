import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShipmentTransportPermitRequestComponent } from '../shipment-transport-permit-request/shipment-transport-permit-request.component';
import { ShipmentTpGenerationComponent } from '../shipment-tp-generation/shipment-tp-generation.component';
import { ShipmentEditComponent } from '../shipment-edit/shipment-edit.component';
import { ShipmentGenerateListComponent } from '../shipment-generate-list/shipment-generate-list.component';
import { ShipmentEvcComponent } from '../shipment-evc/shipment-evc.component';
import { ShipmentGrnComponent } from '../shipment-grn/shipment-grn.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-shipment-shipments',
  templateUrl: './shipment-shipments.component.html',
  styleUrls: ['./shipment-shipments.component.css']
})
export class ShipmentShipmentsComponent implements OnInit {
  isAddPerm = false;
  constructor(private transportDialog: MatDialog, private statusDialog: MatDialog,
              private editDialog: MatDialog, private generateDialog: MatDialog,
              private evcDialog: MatDialog, private grnDialog: MatDialog,
              private permService: NgxPermissionsService, private router: Router,
              private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permService.getPermission('home/shipment') && this.permService.getPermission('home/shipment/shipment-shipments'))) {
      this.router.navigateByUrl('home/shipment');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/shipment/shipment-shipments');
    }
  }
  transport() {
    const config: MatDialogConfig = {
      height: '650px',
      width: '1060px'
    };
    this.transportDialog.open(ShipmentTransportPermitRequestComponent, config);
  }

status(){
  const config: MatDialogConfig = {
    width: '600px'
  };
  this.statusDialog.open(ShipmentTpGenerationComponent, config);
}
edit(){
  this.editDialog.open(ShipmentEditComponent);
}

generate(){
    this.generateDialog.open(ShipmentGenerateListComponent);
}

evc(){
    this.evcDialog.open(ShipmentEvcComponent);
}

grn(){
    this.grnDialog.open(ShipmentGrnComponent);
}

}

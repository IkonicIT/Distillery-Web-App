import { Component, OnInit } from '@angular/core';
import { ProductionLineInformationComponent } from '../production-line-information/production-line-information.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductionLineEditBatchComponent } from '../production-line-edit-batch/production-line-edit-batch.component';
import { ProductionLineEditBatchQuantityComponent } from '../production-line-edit-batch-quantity/production-line-edit-batch-quantity.component';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-production-start',
  templateUrl: './production-start.component.html',
  styleUrls: ['./production-start.component.css']
})
export class ProductionStartComponent implements OnInit {

  constructor(private line: MatDialog, private edit: MatDialog, private quantity: MatDialog,
              private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/production') && this.permServ.getPermission('home/production/production-start'))) {
      this.router.navigateByUrl('home/production');
    }
  }
action() {
  const config: MatDialogConfig = {
    width: '800px',
    height: '800px'
  };
  this.line.open(ProductionLineInformationComponent, config);
}

editBatch() {
  this.edit.open(ProductionLineEditBatchComponent);
}

editQuantity() {
  this.quantity.open(ProductionLineEditBatchQuantityComponent)
}
}

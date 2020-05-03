import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductionLineAllocationComponent } from '../production-line-allocation/production-line-allocation.component';
import { ProductionLineFormComponent } from '../production-line-form/production-line-form.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.css']
})
export class ProductionLineComponent implements OnInit {
  isAddPerm = false;
  constructor(private allocateDialog: MatDialog, private productionLineDialog: MatDialog,
              private permServ: NgxPermissionsService,
              private router: Router,
              private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/production') && this.permServ.getPermission('home/production/production-line'))) {
      this.router.navigateByUrl('home/production');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/production/production-line');
    }
  }
  allocate() {
    this.allocateDialog.open(ProductionLineAllocationComponent);
  }
  productionLine() {
    const config: MatDialogConfig = {
      height: '600px',
      width: '1000px'
    };
    this.productionLineDialog.open(ProductionLineFormComponent, config);
  }

}

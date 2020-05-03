import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SpiritBlendStockComponent } from '../spirit-blend-stock/spirit-blend-stock.component';
import { SpiritBottlingComponent } from '../spirit-bottling/spirit-bottling.component';
import { config } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-spirit-print-approved',
  templateUrl: './spirit-print-approved.component.html',
  styleUrls: ['./spirit-print-approved.component.css']
})
export class SpiritPrintApprovedComponent implements OnInit {
  isAddPerm: boolean;

  constructor(private dialog: MatDialog,private status: MatDialog,
              private permServ: NgxPermissionsService, private router: Router, private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/spirit') && this.permServ.getPermission('home/spirit/print-approved'))) {
      this.router.navigateByUrl('home/spirit');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/spirit/print-approved');
    }
  }
  sampleFormWindow(){
    let config:MatDialogConfig={
      height:'800px',
      width:'2000px'
    }
    this.dialog.open(SpiritBlendStockComponent,config);
  }

  bottFormWindow(){
    let config:MatDialogConfig={
      height:'500px',
      width:'800px'
    }
    this.dialog.open(SpiritBottlingComponent,config);
  }

}


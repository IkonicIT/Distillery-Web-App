import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DepotTransferIndentComponent } from '../depot-transfer-indent/depot-transfer-indent.component';
import { DepotStatusComponent } from '../depot-status/depot-status.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';
@Component({
  selector: 'app-depot-transfer-local',
  templateUrl: './depot-transfer-local.component.html',
  styleUrls: ['./depot-transfer-local.component.css']
})
export class DepotTransferLocalComponent implements OnInit {
  isAddPerm = false;
  constructor(private dialog: MatDialog, private status: MatDialog,
              private permServ: NgxPermissionsService, private router: Router,
              private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/inter-depot') && this.permServ.getPermission('home/depot-home/depot-local'))) {
      this.router.navigateByUrl('home/inter-depot');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/depot-home/depot-local');
    }
  }
  sampleFormWindow() {
    const config: MatDialogConfig = {
      height: '400px',
      width: '1600px'
    };
    this.dialog.open(DepotTransferIndentComponent, config);
  }

  statusFormWindow() {
    const config: MatDialogConfig = {
      height: '300px',
      width: '800px'
    };
    this.dialog.open(DepotStatusComponent, config);
  }

}

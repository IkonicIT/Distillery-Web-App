import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HologramPurchaseIndentFormComponent } from '../hologram-purchase-indent-form/hologram-purchase-indent-form.component';
import { HologramPurchaseIndentStatusViewComponent } from '../hologram-purchase-indent-status-view/hologram-purchase-indent-status-view.component';
import { HologramIndentPurchaseStatusForwardedFormComponent } from '../hologram-indent-purchase-status-forwarded-form/hologram-indent-purchase-status-forwarded-form.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-hologram-purchase-indent',
  templateUrl: './hologram-purchase-indent.component.html',
  styleUrls: ['./hologram-purchase-indent.component.css']
})
export class HologramPurchaseIndentComponent implements OnInit {
  permissionList = [];
  isAddPermission = false;
  constructor(private purchaseDialog: MatDialog, private statusDialog: MatDialog, private forward: MatDialog,
              private permServ: NgxPermissionsService, private router: Router, private localStore: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/hologram') && this.permServ.getPermission('home/hologram/indent-purchase'))) {
      this.router.navigateByUrl('home/hologram');
    } else {
      this.permissionList = this.localStore.getUserPermissions();
      const tempPerm = this.permissionList.find(per => per.path === 'home/hologram/indent-purchase');
      this.isAddPermission = tempPerm ? tempPerm.isAdd === 1 ? true : false : false;
    }
  }
  purchaseIndent() {
    this.purchaseDialog.open(HologramPurchaseIndentFormComponent);
  }
  indentFormEvent() {
    const config: MatDialogConfig = {
      height: '700px',
      width: '1000px'
    };
    this.statusDialog.open(HologramPurchaseIndentStatusViewComponent, config);
  }
indentFormForwarded() {
  const config: MatDialogConfig = {
    height: '200px',
    width: '500px'
  };
  this.forward.open(HologramIndentPurchaseStatusForwardedFormComponent, config);
}

}

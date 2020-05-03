import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HologramDailyIndentFormComponent } from '../hologram-daily-indent-form/hologram-daily-indent-form.component';
import { HologramDailyIndentCheckInventoryComponent } from '../hologram-daily-indent-check-inventory/hologram-daily-indent-check-inventory.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-hologram-daily-indent',
  templateUrl: './hologram-daily-indent.component.html',
  styleUrls: ['./hologram-daily-indent.component.css']
})
export class HologramDailyIndentComponent implements OnInit {
  isAddPermission = false;
  permissionList = [];
  constructor(private dailyIndentDialog: MatDialog, private checkInventoryDialog: MatDialog,
              private permServ: NgxPermissionsService, private router: Router, private localStore: LocalStoreService) { }

    ngOnInit() {
      if (!(this.permServ.getPermission('home/hologram') && this.permServ.getPermission('home/hologram/indent-daily'))) {
        this.router.navigateByUrl('home/hologram');
      } else {
          this.permissionList = this.localStore.getUserPermissions();
          const tempPerm = this.permissionList.find(per => per.path === 'home/hologram/indent-daily');
          this.isAddPermission = tempPerm ? tempPerm.isAdd === 1 ? true : false : false;
      }
    }
  dailyIndent() {
    const config: MatDialogConfig = {
      height: '200px',
      width: '300px'
    };
    this.dailyIndentDialog.open(HologramDailyIndentFormComponent, config);
  }
  checkInventory(){
    this.checkInventoryDialog.open(HologramDailyIndentCheckInventoryComponent);
  }

}

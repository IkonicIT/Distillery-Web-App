import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IfsComponent } from '../ifs/ifs.component';
import { Store } from '@ngrx/store';
import { NgxPermissionsService } from 'ngx-permissions';
import { State } from 'src/app/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-special-ifs',
  templateUrl: './special-ifs.component.html',
  styleUrls: ['./special-ifs.component.css']
})
export class SpecialIfsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  permissionsList: any[] = [];
  hasAddIfsPer = false;
  constructor(private dialog: MatDialog, private status: MatDialog,
              private store: Store<State>, private permissionsService: NgxPermissionsService,
              private router: Router, private localServ: LocalStoreService) { }

  ngOnInit() {
    if (this.permissionsService.getPermission('home/module/indent') &&
    this.permissionsService.getPermission('home/indent-management/special-ifs')) {
        this.permissionsList = this.localServ.getUserPermissions();
        if (this.permissionsList && this.permissionsList.length && this.verifyPermsission('home/indent-management/special-ifs')) {
          this.hasAddIfsPer = this.verifyPermsission('home/indent-management/special-ifs').isAdd === 1 ? true : false;
        }
    } else {
      this.router.navigateByUrl('home/indent-management');
    }
  }
  sampleFormWindow(): void {
    const config: MatDialogConfig = {
      height: '200px',
      width: '1100px'
    };
    this.dialog.open(IfsComponent, config);
  }
  verifyPermsission(key: string): any {
    if (this.permissionsService.hasPermission(key)) {
     return this.permissionsList.find(per => per.path === key);
   }
    return null;
  }
}

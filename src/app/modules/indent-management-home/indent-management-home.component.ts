import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { NgxPermissionsService } from 'ngx-permissions';
import * as AuthActions from '../../store/actions';

@Component({
  selector: 'app-indent-management-home',
  templateUrl: './indent-management-home.component.html',
  styleUrls: ['./indent-management-home.component.css']
})
export class IndentManagementHomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  permissionsList: any;
  hasCreateIndentPer = false;
  hasReconciledChallanasPer = false;
  hasUploadCardsPer = false;
  hasIndentMgmtPerm = false;
  constructor(private store: Store<State>, private permissionsService: NgxPermissionsService) { }
  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
  }

  ngOnInit() {
    this.subscriptions.push(this.store.select('auth').pipe().subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      this.permissionsList = res['permissionList'];
      this.hasIndentMgmtPerm = this.verifyPermsission('home/module/indent') ? true : false;
      if (this.verifyPermsission('home/module/indent/create')) {
        this.hasCreateIndentPer = this.verifyPermsission('home/module/indent/create').isAdd === 1 ? true : false;
      }
      if (this.verifyPermsission('home/indent-management/reconciled-challanas')) {
        this.hasReconciledChallanasPer = this.verifyPermsission('home/indent-management/reconciled-challanas').isAdd === 1 ? true : false;
      }
      if (this.verifyPermsission('home/indent-management/upload-cards')) {
        this.hasUploadCardsPer = this.verifyPermsission('home/indent-management/upload-cards').isAdd === 1 ? true : false;
      }
    }));
  }

  verifyPermsission(key: string): any {
    if (this.permissionsService.hasPermission(key)) {
     return this.permissionsList.find(per => per.path === key);
   }
    return null;
  }

  addSubMenu(key: string): void {
    if (key) {
      this.store.dispatch(new AuthActions.AddCurrSubMenu(key));
    }
  }

}

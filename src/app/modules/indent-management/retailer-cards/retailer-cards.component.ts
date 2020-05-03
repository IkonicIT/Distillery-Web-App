import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-retailer-cards',
  templateUrl: './retailer-cards.component.html',
  styleUrls: ['./retailer-cards.component.css']
})
export class RetailerCardsComponent implements OnInit, OnDestroy {
  permissionsList: any;
  hasAddPer = false;
  constructor(private permissionsService: NgxPermissionsService, private store: Store<State>,
              private router: Router, private localServ: LocalStoreService) { }
  ngOnDestroy(): void {

  }

  ngOnInit() {

    if (this.permissionsService.getPermission('home/module/indent') &&
    this.permissionsService.getPermission('home/indent-management/retailer-cards')) {
      this.permissionsList = this.localServ.getUserPermissions();
      const permissions =  this.permissionsList.find(per => per.path === 'home/indent-management/retailer-cards');
      this.hasAddPer = permissions ? permissions.isAdd === 1 ? true : false : false;
    } else {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}

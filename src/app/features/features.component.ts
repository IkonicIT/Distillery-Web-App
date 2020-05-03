import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStoreService } from '../services/common/local-store.service';
import { ToastrService } from 'ngx-toastr';
import { SidemenuService } from '../services/apiServices/sidemenu.service';
import { MainFeature } from '../services/common_interface';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as AuthActions from '../store/actions';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnDestroy {

  userName: any;
  sideNavData: MainFeature = {};
  roleName: any;
  permissionsList: any;
  subscriptions: Subscription[] = [];
  favItemKeys = [];
  constructor(private sidemenuService: SidemenuService, private store: Store<State>,
              private localServ: LocalStoreService, private toastr: ToastrService,
              private permissionsService: NgxPermissionsService,
              private router: Router) {
  }
  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
  }

  ngOnInit() {
    this.roleName = localStorage.getItem('roleName');
    this.subscriptions.push(this.store.select('auth').pipe().subscribe(res => {
          if (res) {
          // tslint:disable-next-line:no-string-literal
          this.permissionsList = res['permissionList'];
          this.favItemKeys = res['favItems'] ? JSON.parse(res['favItems']) : [];
          const permissions = this.permissionsList.map(per => per.path);
          this.permissionsService.loadPermissions(permissions);
          this.sideNavData.mainNavData = res['menus']['mainNavData'];
          this.sideNavData.featuresData = res['menus']['featuresData'].filter(feature => permissions.includes(feature.key));
          this.sideNavData.featuresData.forEach(fav => {
            if (this.favItemKeys.includes(fav.key)) {
              fav['isFav'] = true;
            } else {
              fav['isFav'] = false;
            }
          });
          }

        }));
  }
  sidenavpassdata(item) {
    this.sidemenuService.setData(item);
  }
  logout() {
    this.localServ.removeLoginUser('Username');
    this.localServ.watchStorage().subscribe((data: string) => {
      this.userName = localStorage.getItem('Username');
    });
    this.toastr.success('successfully logout');
  }
  navigate(item: any): void {
    this.store.dispatch(new AuthActions.AddCurrMenu(item));
    this.router.navigate([item.routerLink]);
  }

  addFav(event: Event, key: string): void {
    event.stopPropagation();
    if (this.favItemKeys.includes(key)) {
      this.favItemKeys = this.favItemKeys.filter(fav => fav !== key);
      this.addToFav(key, 'REMOVE');
    } else if (this.favItemKeys.length < 5) {
      this.favItemKeys.push(key);
      this.addToFav(key, 'ADD');
    } else {
      this.toastr.warning('Max 5 Fav items Allowed');
    }
  }

  addToFav(key: string, type: string): void {
    const favItems = this.favItemKeys.length ? JSON.stringify(this.favItemKeys) : '';
    const requestPayload = {
      userId: localStorage.getItem('userId'),
      favourites: favItems
    };
    this.localServ.saveFav({requestData: requestPayload}).subscribe(() => {
      this.store.dispatch(new AuthActions.AddFav(favItems));
      this.localServ.setFavItems(true);
    },
    () => {
      if (type === 'ADD') {
        this.favItemKeys = this.favItemKeys.filter(fav => fav === key);
        this.store.dispatch(new AuthActions.AddFav(JSON.stringify(this.favItemKeys)));
        // this.localServ.setFavItems(true);
      } else {
        this.favItemKeys.push(key);
        this.store.dispatch(new AuthActions.AddFav(JSON.stringify(this.favItemKeys)));
        // this.localServ.setFavItems(true);
      }
    });
  }

}

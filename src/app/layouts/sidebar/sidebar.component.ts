import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/apiServices/user.service';
import { SidemenuService } from 'src/app/services/apiServices/sidemenu.service';
import { MainFeature } from 'src/app/services/common_interface';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../store/actions';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  userName: string;
  sidebarData: any;
  permList = [];
  childMenuList = [];
  currentMenu: any;
  currentSubMenu: any;
  subscriptions: Subscription[] = [];
  constructor(private router: Router, private sidemenuService: SidemenuService,
              private localServ: LocalStoreService, private toastr: ToastrService,
              private userService: UserService, private store: Store<State>) {
  }

  roleName: any;
  activeItem = 'indent';
  showSubmenu = true;
  submenu: any;
  changeText: boolean;
  filterarray: any;
  sideNavData: any;
  permissionsList: any;
  menuItems = [];
  subMenus = [];
  hideDashBoard = false;
  subPopupMenus = [];
  favItemKeys = [];
  ngOnInit() {
    this.subscriptions.push(this.store.select('auth').pipe().subscribe(res => {
      if (res) {
        this.menuItems = [];
        this.permissionsList = res['permissionList'];
        this.favItemKeys = res['favItems'] ? JSON.parse(res['favItems']) : [];
        const permissions = this.permissionsList.map(per => per.path);
        this.sideNavData = res['menus'];
        this.childMenuList = res['childMenus'];
        this.sideNavData.featuresData = this.sideNavData.featuresData.filter(feature => permissions.includes(feature.key));
        this.sideNavData.featuresData.forEach(data => data['isMenuClicked'] = false);
        this.currentMenu = res['currentMenu'];
        this.currentSubMenu = res['currentSubMenu'];
        if (this.currentMenu) {
          this.currentMenu['isMenuClicked'] = false;
          if (!this.favItemKeys.includes(this.currentMenu['key'])) {
            this.menuItems.push(this.currentMenu);
            this.hideDashBoard = true;
          }
          const sMenu = this.childMenuList.find(sm => sm.routerLink === this.currentSubMenu);
          if (this.currentSubMenu && sMenu) {
            this.menuItems.push(sMenu);
          }
        } else {
          this.hideDashBoard = false;
        }
        this.menuItems = [...this.menuItems, ...this.sideNavData.featuresData.filter(menu => this.favItemKeys.includes(menu.key))];
      }
      }));


  }
  onmenu() {
    this.changeText = !this.changeText;

  }
  setActiveItem(page: string) {
    this.activeItem = page;
  }
  logout() {
    this.localServ.removeLoginUser('Username');
    this.localServ.watchStorage().subscribe((data: string) => {
      this.userName = localStorage.getItem('Username');
    });
    this.toastr.success('successfully logout');
  }
  isView(path) {
    // return true;
    return this.permList.filter(e => e.path === path && e.isView === 1).length > 0;
  }

  getChildMenus(menu: string): any[] {
    const menus = this.childMenuList.filter(chMenu => chMenu.parent === menu);
    return menus.filter(m => this.localServ.checkViewpermission(m.routerLink));
  }
  navigateByUrl(url: any, event: Event): void {
    event.preventDefault();
    if (url === '/features') {
      this.hideDashBoard = false;
      this.store.dispatch(new AuthActions.RemoveCurrMenus());
      sessionStorage.removeItem('menu');
      this.router.navigateByUrl(url);
    } else if (!url.parent) {
      this.store.dispatch(new AuthActions.AddCurrSubMenu(null));
      this.router.navigateByUrl(url.routerLink);
    }
  }
  navigate(item: any, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (item.parent) {
      this.store.dispatch(new AuthActions.AddCurrSubMenu(item.routerLink));
    } else {
      this.store.dispatch(new AuthActions.AddCurrMenu(item));
      this.store.dispatch(new AuthActions.AddCurrSubMenu(null));
    }
    this.router.navigateByUrl(item.routerLink);
  }
  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
  }

  getPopUpMenus(item: any): any {
    if (!item.parent && this.sideNavData.featuresData && this.sideNavData.featuresData.length) {
      return this.sideNavData.featuresData.filter(data => data['key'] !== item.key);
    } else if (item.parent) {
      return this.childMenuList.filter(cMenu => cMenu.parent === item.parent && cMenu.routerLink !== item.routerLink);
    }
    return [];
  }
}

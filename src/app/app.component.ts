import { Component, OnInit } from '@angular/core';
import { UserService } from './services/apiServices/user.service';
import { Store } from '@ngrx/store';
import { State } from './store';
import * as AuthActions from './store/actions';
import { LoginService } from './services/apiServices/login.service';
import { LocalStoreService } from './services/common/local-store.service';
import { Menus, SubMenus } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toggleSideBar = true;
  title = 'SupplyChainManager';
  isLoggedIn = false;
  constructor(private userServ: UserService,
              private store: Store<State>,
              private loginServ: LoginService,
              private localStore: LocalStoreService) {
  }
  ngOnInit(): void {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth) {
      const menu = sessionStorage.getItem('menu');
      if (menu) {
        this.localStore.setMenuItems(JSON.parse(menu));
      }
      this.loginServ.setUserLogin(true);
      this.store.dispatch(new AuthActions.AddAuth(auth));
      this.store.dispatch(new AuthActions.RemoveCurrMenus());
      if ( window.location.href && window.location.href.includes('home')) {
        const url = window.location.href.split('home');
        const menuKey = url[url.length - 1];
        const key = Menus[menuKey];
        const menuItem = auth['menus']['featuresData'].find(m => m.key === key);
        if (menuItem) {
          this.store.dispatch(new AuthActions.AddCurrMenu(menuItem));
          if (SubMenus.includes(menuKey)) {
            this.store.dispatch(new AuthActions.AddCurrSubMenu('home' + menuKey));
          }
        }
      } else {
        this.store.dispatch(new AuthActions.AddCurrMenu(null));
      }
    }
    this.userServ.getToggleSideBar().subscribe(res => this.toggleSideBar = res);
    this.loginServ.getUserLogin().subscribe(res => this.isLoggedIn = res);
  }
}

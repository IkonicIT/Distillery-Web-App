import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  private userPermissions: any = [];
  subscriptions: Subscription[] = [];
  private storageSub = new BehaviorSubject('');
  private menuItems$ = new BehaviorSubject<any>(null);
  private favItems$ = new BehaviorSubject<any>(null);
  permissionList: any = [];
  constructor(private store: Store<State>, private permServ: NgxPermissionsService,
              private http: HttpService) {
  this.subscriptions.push(this.store.select('auth').pipe().subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      this.userPermissions = res ? res['permissionList'] : [];
      this.permServ.loadPermissions(this.userPermissions.map(per => per.path));
    }));
  }
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  storeLoginUser(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(data);
  }

  removeLoginUser(key) {
    localStorage.removeItem(key);
    this.storageSub.next('changed');
  }

  getUserPermissions(): any {
    return this.userPermissions;
  }

  checkAddPermission(key: string): boolean {
    const tempPerm = this.userPermissions.find(per => per.path === key);
    return tempPerm ? tempPerm.isAdd === 1 ? true : false : false;
  }
  checkViewpermission(key: string): boolean {
    const tempPerm = this.userPermissions.find(per => per.path === key);
    return tempPerm ? tempPerm.isView === 1 ? true : false : false;
  }
  checkEditPermission(key: string): boolean {
    const tempPerm = this.userPermissions.find(per => per.path === key);
    return tempPerm ? tempPerm.isEdit === 1 ? true : false : false;
  }
  checkDeletePermission(key: string): boolean {
    const tempPerm = this.userPermissions.find(per => per.path === key);
    return tempPerm ? tempPerm.isDelete === 1 ? true : false : false;
  }
  setMenuItems(items: any): void {
    sessionStorage.setItem('menu', JSON.stringify(items));
    this.menuItems$.next(items);
  }
  getMenuItems(): Observable<any> {
    return this.menuItems$.asObservable();
  }
  setFavItems(items: any): void {
    if (items) {
      this.favItems$.next(JSON.parse(items));
    }
    this.favItems$.next(items);
  }
  getFavItems(): Observable<any> {
    return this.favItems$.asObservable();
  }
  saveFav(payload: any): Observable<any> {
    const url = `/user/addToFavourites`;
    return this.http.post<any>(url, payload)
    .pipe(catchError(this.http.handleHttpError));
  }
}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private toggleSidebar$ = new BehaviorSubject<boolean>(true);

    // tslint:disable-next-line:variable-name
    constructor(private _http: HttpService) { }
    saveUserWithRolesMap(postBody) {
        const url = 'user/saveOrUpdateUserRolesMap';
        const requestBody = {
            requestData: postBody
        };
        return this._http.post<any>(url, requestBody)
            .pipe(catchError(this._http.handleHttpError));
    }
    saveRolePermissions(postBody) {
        const url = 'user/saveRolePermissions';
        const requestBody = {
            requestData: postBody
        };
        return this._http.post<any>(url, requestBody)
            .pipe(catchError(this._http.handleHttpError));
    }
    getActiveRoles(): Observable<any> {
        return this._http.get<any>('user/fetchActiveRoles').pipe(catchError(this._http.handleHttpError));
    }
    fetchUserRolePermByUserId(postBody) {
        const url = 'user/fetchUserRolePermByUserId';
        const requestBody = {
            requestData: postBody
        };
        return this._http.post<any>(url, requestBody)
            .pipe(catchError(this._http.handleHttpError));
    }
    fetchPermissionsByRoleId(postBody) {
        const url = 'user/fetchPermissionsByRoleId';
        const requestBody = {
            requestData: postBody
        };
        return this._http.post<any>(url, requestBody)
            .pipe(catchError(this._http.handleHttpError));
    }
    fetchActiveUsers(): Observable<any> {
        return this._http.get<any>('user/fetchActiveUsers').pipe(catchError(this._http.handleHttpError));
    }

    setToggleSideBar(value: boolean): void {
        this.toggleSidebar$.next(value);
    }

    getToggleSideBar(): Observable<boolean> {
        return this.toggleSidebar$.asObservable();
    }
}

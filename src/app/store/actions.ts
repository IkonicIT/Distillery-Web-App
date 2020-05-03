import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Auth } from '../modules/models/interface.service';

export const ADD_AUTH = '[Auth] Add';
export const ADD_FAV = '[Auth] ADD_FAV';
export const ADD_MENUS = '[Auth] Add MENU';
export const ADD_CHILD_MENUS = '[Auth] Add Child Menus';
export const ADD_CUR_MENU = '[Auth] Add Current Menu';
export const ADD_CUR_SUB_MENU = '[Auth] Add Current Sub Menu';
export const REMOVE_CUR_MENUS = '[Auth] Add Current Menu And Sub Menu';

export class AddAuth implements Action {
    readonly type = ADD_AUTH;
    constructor(public payload: Auth) {
    }
}

export class AddFav implements Action {
    readonly type = ADD_FAV;
    constructor(public payload: string) {
    }
}
export class AddMenus implements Action {
    readonly type = ADD_MENUS;
    constructor(public payload: any) {
    }
}

export class AddChildMenu implements Action {
    readonly type = ADD_CHILD_MENUS;
    constructor(public payload: any) {
    }
}

export class AddCurrMenu implements Action {
    readonly type = ADD_CUR_MENU;
    constructor(public payload: any) {
    }
}

export class AddCurrSubMenu implements Action {
    readonly type = ADD_CUR_SUB_MENU;
    constructor(public payload: any) {
    }
}

export class RemoveCurrMenus implements Action {
    readonly type = REMOVE_CUR_MENUS;
    constructor() {
    }
}

export type Actions = AddAuth | AddFav | AddMenus | AddChildMenu | AddCurrMenu | AddCurrSubMenu | RemoveCurrMenus;


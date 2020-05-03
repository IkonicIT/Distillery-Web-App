import { Auth } from '../modules/models/interface.service';
import * as AuthActions from './actions';

const initialSate: Auth = {
    permissionList: []
};

export function AuthReducer(state: any, actions: AuthActions.Actions) {

    switch (actions.type) {
        case AuthActions.ADD_AUTH:
            const obj = actions.payload;
            localStorage.setItem('auth', JSON.stringify(obj));
            return obj;
        case AuthActions.ADD_FAV:
            const addFavobj = {
                permissionList: state.permissionList,
                favItems: actions.payload,
                menus: state.menus,
                childMenus: state.childMenus,
                currentMenu: state.currentMenu,
                currentSubMenu: state.currentSubMenu
            };
            localStorage.setItem('auth', JSON.stringify(addFavobj));
            return addFavobj;
        case AuthActions.ADD_MENUS:
            const addMenuobj = {
                permissionList: state.permissionList,
                favItems: state.favItems,
                menus: actions.payload,
                childMenus: state.childMenus,
                currentMenu: state.currentMenu,
                currentSubMenu: state.currentSubMenu
            };
            localStorage.setItem('auth', JSON.stringify(addMenuobj));
            return addMenuobj;
        case AuthActions.ADD_CHILD_MENUS:
            const addChildMenuobj = {
                permissionList: state.permissionList,
                favItems: state.favItems,
                menus: state.menus,
                childMenus: actions.payload,
                currentMenu: state.currentMenu,
                currentSubMenu: state.currentSubMenu
            };
            localStorage.setItem('auth', JSON.stringify(addChildMenuobj));
            return addChildMenuobj;
        case AuthActions.ADD_CUR_MENU:
            const addCurrentMenuObj = {
                permissionList: state.permissionList,
                favItems: state.favItems,
                menus: state.menus,
                childMenus: state.childMenus,
                currentMenu: actions.payload,
                currentSubMenu: state.currentSubMenu
            };
            localStorage.setItem('auth', JSON.stringify(addCurrentMenuObj));
            return addCurrentMenuObj;
        case AuthActions.ADD_CUR_SUB_MENU:
            const addCurrentSubMenuObj = {
                permissionList: state.permissionList,
                favItems: state.favItems,
                menus: state.menus,
                childMenus: state.childMenus,
                currentMenu: state.currentMenu,
                currentSubMenu: actions.payload
            };
            localStorage.setItem('auth', JSON.stringify(addCurrentSubMenuObj));
            return addCurrentSubMenuObj;
        case AuthActions.REMOVE_CUR_MENUS:
            const removeCurrentMenusObj = {
                permissionList: state.permissionList,
                favItems: state.favItems,
                menus: state.menus,
                childMenus: state.childMenus,
                currentMenu: null,
                currentSubMenu: null
            };
            localStorage.setItem('auth', JSON.stringify(removeCurrentMenusObj));
            return removeCurrentMenusObj;
        default:
            return state;
    }

}

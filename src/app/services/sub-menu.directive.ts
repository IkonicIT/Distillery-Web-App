import { Directive, Input, HostListener } from '@angular/core';
import { State } from '../store';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/actions';

@Directive({
  selector: '[appSubMenu]'
})
export class SubMenuDirective {
  @Input('appSubMenu') subMenu: any;
  constructor(private store: Store<State>) { }

  @HostListener('click')
  onClick() {
    this.store.dispatch(new AuthActions.AddCurrSubMenu(this.subMenu));
 }
}

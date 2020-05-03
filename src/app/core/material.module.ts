import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule,
     MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatMenuModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, 
    MatIconModule, MatSidenavModule, MatListModule,MatMenuModule],
})
export class CustomMaterialModule { }

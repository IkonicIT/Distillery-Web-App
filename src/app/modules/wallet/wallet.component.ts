import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';
import { WalletPopupComponent } from './wallet-popup/wallet-popup.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

   roleName:any;
   hasWalletPerm = false;

  constructor(private dialog:MatDialog,private status:MatDialog,
              private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    this.hasWalletPerm = this.permServ.getPermission('home/Wallet') ? true : false;
    this.roleName = localStorage.getItem('roleName');
    console.log('roleName is'+ this.roleName);
  }
  sampleFormWindow(){
    let config:MatDialogConfig={
      height:'300px',
      width:'600px'
    }
    this.dialog.open(WalletPopupComponent,config);
  }


}

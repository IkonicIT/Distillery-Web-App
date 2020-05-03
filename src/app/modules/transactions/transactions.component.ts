import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  hasSupplierPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasSupplierPerm = this.permServ.getPermission('home/module/transactions') ? true : false;
  }

}

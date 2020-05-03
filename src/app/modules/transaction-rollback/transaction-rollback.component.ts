import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-rollback',
  templateUrl: './transaction-rollback.component.html',
  styleUrls: ['./transaction-rollback.component.css']
})
export class TransactionRollbackComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/transaction-rollback'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}

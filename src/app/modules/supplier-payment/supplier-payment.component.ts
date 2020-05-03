import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-payment',
  templateUrl: './supplier-payment.component.html',
  styleUrls: ['./supplier-payment.component.css']
})
export class SupplierPaymentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/supplier-payment'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}

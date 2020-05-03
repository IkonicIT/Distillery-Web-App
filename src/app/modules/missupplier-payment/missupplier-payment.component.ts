import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missupplier-payment',
  templateUrl: './missupplier-payment.component.html',
  styleUrls: ['./missupplier-payment.component.css']
})
export class MissupplierPaymentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/missupplier-payment'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}

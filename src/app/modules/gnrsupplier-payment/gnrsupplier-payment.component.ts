import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gnrsupplier-payment',
  templateUrl: './gnrsupplier-payment.component.html',
  styleUrls: ['./gnrsupplier-payment.component.css']
})
export class GnrsupplierPaymentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/gnrsupplier-payment'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consolidate-payment',
  templateUrl: './consolidate-payment.component.html',
  styleUrls: ['./consolidate-payment.component.css']
})
export class ConsolidatePaymentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/consolidate-payment'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}

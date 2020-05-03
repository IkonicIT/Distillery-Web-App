import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-sales',
  templateUrl: './shop-sales.component.html',
  styleUrls: ['./shop-sales.component.css']
})
export class ShopSalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-sales') && this.permServ.getPermission('home/licensee-sales/shop-sales'))) {
      this.router.navigateByUrl('home/licensee-sales');
    }
  }

}

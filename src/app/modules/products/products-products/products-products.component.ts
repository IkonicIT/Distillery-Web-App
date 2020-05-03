import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-products',
  templateUrl: './products-products.component.html',
  styleUrls: ['./products-products.component.css']
})
export class ProductsProductsComponent implements OnInit {
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/products') && this.permServ.getPermission('home/products/products-products'))) {
      this.router.navigateByUrl('home/products');
    }
  }

}

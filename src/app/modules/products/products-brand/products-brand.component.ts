import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-brand',
  templateUrl: './products-brand.component.html',
  styleUrls: ['./products-brand.component.css']
})
export class ProductsBrandComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/products') && this.permServ.getPermission('home/products/products-brand'))) {
      this.router.navigateByUrl('home/products');
    }
  }

}

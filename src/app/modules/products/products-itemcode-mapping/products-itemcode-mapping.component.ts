import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-itemcode-mapping',
  templateUrl: './products-itemcode-mapping.component.html',
  styleUrls: ['./products-itemcode-mapping.component.css']
})
export class ProductsItemcodeMappingComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/products') && this.permServ.getPermission('home/products/products-iteamcode'))) {
      this.router.navigateByUrl('home/products');
    }
  }

}

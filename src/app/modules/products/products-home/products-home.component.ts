import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  hasProductPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasProductPerm = this.permServ.getPermission('home/products') ? true : false;
  }

}
